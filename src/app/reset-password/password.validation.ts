import { AbstractControl, ValidationErrors } from "@angular/forms";

export class passwordValidation{

static OldPasswordMatch(control:AbstractControl):Promise<ValidationErrors | null> {
    return new Promise(function(resolve,reject){
          setTimeout(function(){
            if(control.value !== "123"){
              resolve({OldPasswordMatch:true})
            }else{
              resolve( null)
            }
          },2000)
  
    })
  }

static PasswordShouldMatch(control:AbstractControl):Promise<ValidationErrors | null> {
    return new Promise(function(resolve,reject){
        resolve (null)
    })

}  
}