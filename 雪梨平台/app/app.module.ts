import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TongbuComponent } from './components/tongbu/tongbu.component';
import { CourseComponent } from './components/course/course.component';
import { HeaderComponent } from './components/header/header.component';
import { ShequComponent } from './components/shequ/shequ.component';
import { TongbudetailComponent } from './components/tongbudetail/tongbudetail.component';
import{FormsModule}from '@angular/forms';
import{RouterModule,Router} from'@angular/router';
import{HttpClientModule} from '@angular/common/http';
import { JianjieComponent } from './components/jianjie/jianjie.component';
import { HudongComponent } from './components/hudong/hudong.component';
import { TaskComponent } from './components/task/task.component';
import { PersonComponent } from './components/person/person.component';
import { TopicComponent } from './components/topic/topic.component';
import { CoursedetailComponent } from './components/coursedetail/coursedetail.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TongbukeComponent } from './components/tongbuke/tongbuke.component';
import { CoursesComponent } from './components/courses/courses.component';
import { SpeakComponent } from './components/speak/speak.component';
import { CommitComponent } from './components/commit/commit.component';
import { FinishComponent } from './components/finish/finish.component';
import { WanjieComponent } from './components/wanjie/wanjie.component';
import { ShequdetailComponent } from './components/shequdetail/shequdetail.component';
import { StudyComponent } from './components/study/study.component';
import { GuanzhuComponent } from './components/guanzhu/guanzhu.component';
import { LookedComponent } from './components/looked/looked.component';
import { NoticeComponent } from './components/notice/notice.component';
import { MyComponent } from './components/my/my.component';
import { ZanComponent } from './components/zan/zan.component';
import { CommentComponent } from './components/comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TongbuComponent,
    CourseComponent,
    HeaderComponent,
    ShequComponent,
    TongbudetailComponent,
    JianjieComponent,
    HudongComponent,
    TaskComponent,
    PersonComponent,
    TopicComponent,
    CoursedetailComponent,
    TasksComponent,
    TongbukeComponent,
    CoursesComponent,
    SpeakComponent,
    CommitComponent,
    FinishComponent,
    WanjieComponent,
    ShequdetailComponent,
    StudyComponent,
    GuanzhuComponent,
    LookedComponent,
    NoticeComponent,
    MyComponent,
    ZanComponent,
    CommentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent,children:[
        {path:'tasks',component:TasksComponent,children:[
          {path:'commit',component:CommitComponent},
          {path:'finish',component:FinishComponent},
          {path:'wanjie',component:WanjieComponent},
          {path:'',redirectTo:'commit',pathMatch:'full'}
        ]},
        {path:'tongbuke',component:TongbukeComponent},
        {path:'courses',component:CoursesComponent,children:[
          {path:'study',component:StudyComponent},
          {path:'guanzhu',component:GuanzhuComponent},
          {path:'looked',component:LookedComponent},
          {path:'',redirectTo:'study',pathMatch:'full'}
        ]},
        {path:'speak',component:SpeakComponent},
        {path:'notice',component:NoticeComponent,children:[
          {path:'my',component:MyComponent},
          {path:'zan',component:ZanComponent},
          {path:'comment',component:CommentComponent},
          {path:'',redirectTo:'my',pathMatch:'full'}
        ]}
      ]},
      {path:'tongbu',component:TongbuComponent},
      {path:'tongbu/:courseId',component:TongbudetailComponent,children:[
        {path:'jianjie',component:JianjieComponent},
        {path:'hudong',component:HudongComponent},
        {path:'task',component:TaskComponent},
        {path:'person',component:PersonComponent},
        {path:'',redirectTo:'task',pathMatch:'full'}
      ]},
      {path:'course',component:CourseComponent},
      {path:'course/:videoId',component:CoursedetailComponent},
      {path:'coursedetail',component:CoursedetailComponent},
      {path:'shequ',component:ShequComponent},
      {path:'shequ/:articleId',component:ShequdetailComponent},
      {path:'topic',component:TopicComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'**',component:ShequComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
