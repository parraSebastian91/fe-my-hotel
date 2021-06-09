import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UperCaseFirsLetterPipe } from './uper-case-firs-letter.pipe';



@NgModule({
  declarations: [
    UperCaseFirsLetterPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    UperCaseFirsLetterPipe
  ]
})
export class PipesModule { }
