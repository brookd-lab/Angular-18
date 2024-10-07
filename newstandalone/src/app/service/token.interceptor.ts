import { HttpHandlerFn, HttpInterceptorFn, HttpRequest } from "@angular/common/http";

export const authenticationInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next:
  HttpHandlerFn) => {
     const userToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3Mjc4MTg4NDEsImlzcyI6IlRlc3QuY29tIiwiYXVkIjoiVGVzdC5jb20ifQ.2LE_UtqOmXMGkhNWxajQNgh7f-CFO4AIsASNCnyV70s'; 
     const modifiedReq = req.clone({
       headers: req.headers.set('Authorization', `Bearer ${userToken}`),
     });
  
     return next(modifiedReq);
  };

