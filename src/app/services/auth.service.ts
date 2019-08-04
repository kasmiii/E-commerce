export class AuthService{
    isAuth:boolean;
    
    signIn(){
        this.isAuth=true;
    }
    
    signOut(){
        this.isAuth=false;
    }
    
    }