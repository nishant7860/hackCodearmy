import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { mergeMapTo } from 'rxjs/operators';
import { take } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import{ApiService} from '../services/ApiService';
import {Payload} from '../modals/payload';
import{ToasterService} from '../toster-service.service';
@Injectable()

export class MessagingService {

  currentMessage = new BehaviorSubject(null);
  public message;
  response: any;
  constructor(
    private ApiService: ApiService,
    private toasterService: ToasterService,
    private angularFireDB: AngularFireDatabase,
    private angularFireAuth: AngularFireAuth,
    private angularFireMessaging: AngularFireMessaging) {
    this.angularFireMessaging.messaging.subscribe(
      (_messaging) => {
        _messaging.onMessage = _messaging.onMessage.bind(_messaging);
        _messaging.onTokenRefresh = _messaging.onTokenRefresh.bind(_messaging);
      }
    );
  }

  /**
   * update token in firebase database
   *
   * @param userId userId as a key
   * @param token token as a value
   */
  updateToken(userId, token) {
    // we can change this function to request our backend service
    this.angularFireAuth.authState.pipe(take(1)).subscribe(
      () => {
        const data = {};
        data[userId] = token;
        this.angularFireDB.object('fcmTokens/').update(data);
      });
  }

  /**
   * request permission for notification from firebase cloud messaging
   *
   * @param userId userId
   */
  requestPermission(userId) {
    this.angularFireMessaging.requestToken.subscribe(
      (token) => {
        localStorage.setItem('token', token);
        this.ApiService.UpdateToken(Number(localStorage.getItem('ID')), token).subscribe(
          response => {this.response = response;
          }
          );
        // this.updateToken(userId, token);

      },
      (err) => {
        console.error('Unable to get permission to notify.', err);
      }
    );
  }

  /**
   * hook method when new notification received in foreground
   */
  receiveMessage() {
    this.angularFireMessaging.messages.subscribe(
      (payload) => {

        let newstr = payload['notification']['body'].replace('\n', '<br>');
        this.toasterService.Success(newstr, payload['notification']['title']);
        this.currentMessage.next(payload);
      });

    }

}
