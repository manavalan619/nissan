
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SharedService {

    public static BaseHost = 'http://' + window.location.hostname;

    // public DESKTOP_API = '/api/desktop';
    public MOBILE_API = '/api/mobile';

    public DESKTOP_API = 'http://34.197.46.177:3000/desktop';

    public CDN_API = 'http://localhost:3015/generate/wcm';

    // public Apigateway: String = SharedService.BaseHost + ':3000';

}
