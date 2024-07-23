import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { LoggingService } from './app/logging.service';
import { InjectionToken } from '@angular/core';

export const LogServiceToken = new InjectionToken<LoggingService>('log-service-token')
bootstrapApplication(AppComponent, {
    // providers:[LoggingService]
    providers:[{provide: LogServiceToken, useClass:LoggingService}]
}).catch((err) => console.error(err));
