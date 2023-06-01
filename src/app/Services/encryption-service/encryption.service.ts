import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class EncryptionService {

  constructor() { }
  encryptData(data: string): string {
    return CryptoJS.AES.encrypt(data, environment.encryptionKey).toString();
  }

  decryptData(encryptedData: string): string {
    const bytes = CryptoJS.AES.decrypt(encryptedData, environment.encryptionKey);
    return bytes.toString(CryptoJS.enc.Utf8);
  }
}
