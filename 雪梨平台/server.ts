import express from 'express';
import bodyParser from 'body-parser';
const app=express();
app.use(bodyParser.json());
export class Course{
    constructor(
        public id:number,
        public courseName:string,
        public images:string,
        public task:number,
        public person:number
    ){}
}
const courses=[
    new Course(1,'javascript',
    "http://usercontent.edu2act.cn/media/team/18-03-05/6niXYjHC5hvoAbWKUQCdPa.jpg?imageView2/1/w/230/h/130",10,90),
    new Course(2,'混合应用',
    "http://usercontent.edu2act.cn/media/team/18-09-18/VE66xjRaii5X8Y9qFZQLZC.jpg?imageView2/1/w/230/h/130",23,100),
    new Course(3,'测试',
    "http://usercontent.edu2act.cn/media/team/17-09-11/ASMzDypscXAUFEQRYtqPkY.jpg?imageView2/1/w/230/h/130",15,97),
    new Course(4,'HTML5与CSS前端开发',
    "http://usercontent.edu2act.cn/media/team/18-09-11/B32yP44hiothFxyegigXe7.jpg?imageView2/1/w/230/h/130",5,91)

]
export class Detail{
    constructor(
        public id:number,
        public images:string,
        public course1Name:string,
        public content:string,
        public time:number,
        public person:number
    ){}
}

const details=[
    new Detail(1,"http://usercontent.edu2act.cn/media/cs/16-11-14/XgKaLUTcWTUsPaqF2hXSHK.png?imageView2/1/w/320/h/190",'CSS3基础','CSS3在以前的基础上添加了诸多新的选择器以及新的样式。本课程将讲解CSS3新样式以及新特性。',12,2316),
    new Detail(2,"http://usercontent.edu2act.cn/media/cs/16-11-11/JjHN2Za86UhpyK8u6MEtsC.png?imageView2/1/w/320/h/190",'HTML5基础','HTML5是最新的一项Web标准，在原有HTML4的基础上定义了一些新的标签和新的JavaScript API。',12,1311,),
    new Detail(3,"http://usercontent.edu2act.cn/media/cs/16-09-22/Qrnx7yH2tp7mGGLSdbhWHc.png?imageView2/1/w/320/h/190",'网页制作与开发','本课程利用线上与线下相结合的授课方式，以网页开发主流软件Dreamweaver为工具，教给学生快速搭建网站的方法。',42,1572,),
    new Detail(4,"http://usercontent.edu2act.cn/media/cs/16-09-02/QV7FBJ72fUkL3sv6Te2FEP.png?imageView2/1/w/320/h/190",'ProcessOn界面原型绘制',' ProcessOn界面原型绘制功能的主要操作。ProcessOn界面原型绘制功能的使用技巧。',2,4234)
]

export class Article{
    constructor(
        public id:number,
        public images:string,
        public courseName:string,
        public content:string,
        public name:string,
        public time:string,
        public read:number,
        public comment:number
    ){}
}
const articles=[
    new Article(1,"http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/5WounpUrmbfrtEVquzw5De.jpg",'WEB开发 （二）—函数','（一）函数三要素函数的三要素为函数名、参数（形参，实参），返回值。（二）函数定义与调用函数定义的关键字为function，不能省略，也不要能简写。','刘秀梅','2018-10-11 15:10',1243,4),
    new Article(2,"http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/c67LLKXLBdRtuxNueeRshN.jpg",'类定义关键字详解','JAVA类与对象（三）----类定义关键字详解 static 表示静态，它可以修饰属性，方法和代码块。1.static修饰属性（类变量），那么这个属性就可以用类名.属性名来','3-张馨元','2018-10-09 19:21',49,0),
    new Article(3,"http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/edrLxidT6BMiGxXjRq39iJ.jpg",'一个java文件中可包含多个main方法','一个java文件中可包含多个main方法java中的main方法是java应用程序的入口，java程序在运行时，首先调用执行main方法。但并不是说java中只能有一个main方法，不同类中都可以包含main方法。','3-张馨元','2018-10-09 19:17',36,2),
    new Article(4,"http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/3RtZyjoCHuFQSyZCWgr2o5.jpg",'数据结构--快速排序','快速排序是C.R.A.Hoare于1962年提出的一种划分交换排序。它采用了一种分治的策略，通常称其为分治法(Divide-and-ConquerMethod)。 分治法的基本思想','张玉茹','2018-09-27 16:57',36,0),
    new Article(5,"http://usercontent.edu2act.cn/media/ckeditor/upload2018/0921/Urfhmvo26wACkeBUajeDhJ.png",'初探JVM','今天晚上翻了翻别人的博客了解了jvm的一些基础，因为每个人的侧重点不同，我也联系自己的看法整理一份。 首先要了解jvm基本架构，总的分为三个主要的子','李建涛','2018-09-27 01:04',55,1)
]

export class Finish{
    constructor(
        public id:number,
        public work:string,
        public grade:string,
        public courseName:string,
    ){}
}
const finishs=[
    new Finish(1,'任务二--js基础练习与应用','10分','2016级混合应用开发'),
    new Finish(2,'任务四  文件与拖放','10分','2016级HTML5与CSS前端开发'),
    new Finish(3,'任务一--组件交互与服务','10分','2016级混合应用开发'),
    new Finish(4,'任务三  Web存储','5分','2016级HTML5与CSS前端开发'),
    new Finish(4,'任务二  表单','5分','2016级HTML5与CSS前端开发')
] 

export class Course1{
    constructor(
        public id:number,
        public courseName:string,
        public images:string,
        public task:number,
        public person:number,
        public jianjie:string
    ){}
}
const courses1=[
    new Course1(1,'javascript',
    "http://usercontent.edu2act.cn/media/team/18-03-05/6niXYjHC5hvoAbWKUQCdPa.jpg?imageView2/1/w/230/h/130",10,90,'《JavaScript进阶》是计算机软件及相关专业在H5前端开发方向基础课...'),
    new Course1(2,'混合应用',
    "http://usercontent.edu2act.cn/media/team/18-09-18/VE66xjRaii5X8Y9qFZQLZC.jpg?imageView2/1/w/230/h/130",23,100,'关于angular基础知识'),
    new Course1(3,'测试',
    "http://usercontent.edu2act.cn/media/team/17-09-11/ASMzDypscXAUFEQRYtqPkY.jpg?imageView2/1/w/230/h/130",15,97,'关于软件测试基础知识'),
    new Course1(4,'HTML5与CSS前端开发',
    "http://usercontent.edu2act.cn/media/team/18-09-11/B32yP44hiothFxyegigXe7.jpg?imageView2/1/w/230/h/130",5,91,'本课程主要学习HTML5的新特性、CSS3的新特性以及前端开发框架Bootstrap')

]

export class Video{
    constructor(
        public id:number,
        public courseName:string,
        public work1:string,
        public work2:string,
        public work3:string,
        public video:string,
    ){}
}
const videos=[
    new Video(1,'WEB前端开发','CSS3基础','CSS静态样式','CSS边框',"http://usercontent.edu2act.cn/media/cs/16-11-14/GrPZ9hYtvRt4ss2f2D2tmD.mp4"),
    new Video(2,'WEB前端开发','HTML5基础','HTML5新功能特性','地理位置定位',"http://usercontent.edu2act.cn/media/cs/16-11-11/PzEnutTEAsGFPgyiudCrW8.mp4"),
    new Video(3,'WEB前端开发','网页制作与开发','CSS基本样式修饰（一）','字体样式修饰',"http://usercontent.edu2act.cn/media/cs/16-11-10/ZjH3sA2sSZhvj699c2MbyR.mp4"),
    new Video(4,'产品设计','ProcessOn界面原型绘制','ProcessOn界面','ProcessOn界面原型绘制基本操作',"http://usercontent.edu2act.cn/media/cs/16-09-02/zGzaDrPpMMbCjH6RwRYWUL.mp4")

]

export class Article1{
    constructor(
        public id:number,
        public images:string,
        public courseName:string,
        public name:string,
        public time:string,
        public read:number,
        public content1:string,
        public content2:string,
        public images1:string,
        public content3:string
    ){}
}
const articles1=[
    new Article1(1,"http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/5WounpUrmbfrtEVquzw5De.jpg",
    'WEB开发（二）--函数','刘秀梅','2018-10-11 15:18',1318,'（一）函数三要素函数的三要素为函数名、参数（形参，实参），返回值。',
    '（二）函数定义与调用函数定义的关键字为function，不能省略，也不要能简写。定义函数有3种形式，相应的调用形式有2种。',
    "http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/KcxqbZo7jWtn9VCgxw6DyH.png",
    '注： 不需要在函数声明的后面添加一个分号，并且添加一个分号完全是浪费性能。大括号是函数声明的必须的语法元素之一，同时它也是一个复合语句，可以用来组织语句，右侧的花括弧( } )本身就意味着复合语句的结束，所以不用添加分号，如果添加分号的话，就相当于重新建立了一个空语句。'),
    new Article1(2,"http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/c67LLKXLBdRtuxNueeRshN.jpg",
    '类定义关键字详解','3-张馨元','2018-10-09 19:21',68,'1.static修饰属性（类变量），那么这个属性就可以用类名.属性名来访问，也就是使这个属性成为本类的类变量，为本类对象所共有。这个属性就是全类公有。（共有的类变量与对象无关，只和类有关）。注意：类中的实例变量是在创建对象时被初始化的，被static修饰的属性，也就是类变量，是在类加载时被创建并进行初始化，类加载的过程是进行一次。也就是类变量只会被创建一次。','2.static修饰方法（静态方法），会使这个方法成为整个类所公有的方法，可以用类名.方法名访问。注意：static修饰的方法，不直接能访问本类中的非静态(static)成员（包括方法和属性），本类的静态（static）方法可以访问本类的静态成员（包括方法和属性），可以调用静态方法。静态方法要慎重使用。在静态方法中不能出现this关键字。',"",'注意：父类中是静态方法，子类中不能覆盖为非静态方法，在符合覆盖规则的前提下，在父子类中，父类中的静态方法可以被子类中的静态方法覆盖，但是没有多态。'),
    new Article1(3,"http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/edrLxidT6BMiGxXjRq39iJ.jpg",
    '一个java文件中可包含多个main方法','3-张馨元','2018-10-09 19:17',55,
    '一个java文件中可包含多个main方法','java中的main方法是java应用程序的入口，java程序在运行时，首先调用执行main方法。但并不是说java中只能有一个main方法，不同类中都可以包含main方法。但是当JVM进行编译时，只会会选择接口类里面的main方法，作为编译的入口。',
    "http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/BAmLYquL9bgo5g2YCRSMG8.png",
    '编写一个java源文件时，该源文件又称为编译单元。一个java文件可以包含多个类，但至多包含一个公共类，作为编译时该java文件的公用接口，公共类的名字和源文件的名字要相同，源文件名字的格式为【公共类名.java】。'),
    new Article1(4,"http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/3RtZyjoCHuFQSyZCWgr2o5.jpg",
    '数据结构--快速排序','张玉茹','2018-09-27 16:57',36,'  快速排序是C.R.A.Hoare于1962年提出的一种划分交换排序。它采用了一种分治的策略，通常称其为分治法(Divide-and-ConquerMethod)。',
    '分治法的基本思想是：将原问题分解为若干个规模更小但结构与原问题相似的子问题。递归地解这些子问题，然后将这些子问题的解组合为原问题的解。下面这张图会说明分治算法是如何进行的：'
    ,"http://usercontent.edu2act.cn/media/ckeditor/upload2018/0921/dQ9bDEtRgW788Bn8xJyhEd.jpg",
    '注意：在快速排序算法中，并不产生有序子序列，但每一趟排序后将一个元素（枢轴元素）放到其最终位置上。'),
    new Article1(5,"http://usercontent.edu2act.cn/media/ckeditor/upload2018/0921/Urfhmvo26wACkeBUajeDhJ.png",
    '初探JVM','7-李建涛',' 2018-09-27 01:04',58,'今天晚上翻了翻别人的博客了解了jvm的一些基础，因为每个人的侧重点不同，我也联系自己的看法整理一份。',
    '首先要了解jvm基本架构，总的分为三个主要的子系统，分别为类加载器子系统，运行时数据区和执行引擎。类加载子系统在我看来就是字节码文件(.class)文件与运行时数据区的纽带，字节码文件本身是存储在外部存储器，也就是我们的磁盘中的，而运行时数据区主要是在我们的内存中，我们想要运行一个程序，必然要从外部存储器拿到内存中才能进一步执行，而这个传输的过程就是类加载子系统执行的。',
    "http://usercontent.edu2act.cn/media/ckeditor/upload2018/0921/oD83nj2U9ywCvRXCnHMBGK.png",
    '我对于类加载的过程不太了解，仅知道类加载器有启动类加载器、扩展类加载器和应用程序类加载器三种，当然静态变量的初始化以及静态代码块的执行也在这个过程中。')
]

export class Task{
    constructor(
        public id:number,
        public courseName:string,
        public name:string,
        public time:string,
        public person1:number,
        public person2:number,
        public person3:number
    ){}
}
const tasks=[
    new Task(1,'任务二十三','祁乐','2018-06-28 10:11',0,13,79),
    new Task(2,'任务三 -- 雪梨平台开发','刘冠军','2018-10-21 15:13',4,86,0),
    new Task(3,'任务十二 动态白盒测试--独立路径测试','刘兴梅','2017-12-18 17:19',0,15,83),
    new Task(4,'任务五 canvas','刘孟祎','2018-10-15 17:15',73,17,0)
]

export class Person{
    constructor(
        public id:number,
        public name:string,
        public role:string
    ){}
}
const persons=[
    new Person(1,'刘冠军','教师'),
    new Person(2,'3-陈琛','学生'),
    new Person(3,'8-徐瑞婷','学生'),
    new Person(4,'4-李敬单','学生'),
    new Person(5,'8-侯存巧','学生'),
    new Person(3,'8-李薇','学生'),
    new Person(3,'8-葛舒悦','学生')
]

app.get('/api',(req,res)=>{
    res.json(courses);
    res.json(details);
    res.json(articles);
    res.json(finishs);
    res.json(courses1);
    res.json(videos);
    res.json(articles1);
    res.json(tasks);
    res.json(persons);
});

app.get('/api/courses',(req,res)=>{
    res.json(courses);
});
app.get('/api/courses/:id',(req,res)=>{
    res.json(courses.find((ele)=>ele.id==req.params.id));
});

app.get('/api/details',(req,res)=>{
    res.json(details);
});
app.get('/api/details/:id',(req,res)=>{
     res.json(details.find((ele)=>ele.id==req.params.id));
 });

app.get('/api/articles',(req,res)=>{
    res.json(articles);
});
app.get('/api/articles/:id',(req,res)=>{
     res.json(articles.find((ele)=>ele.id==req.params.id));
 });
 
app.get('/api/finishs',(req,res)=>{
    res.json(finishs);
});
app.get('/api/finishs/:id',(req,res)=>{
     res.json(finishs.find((ele)=>ele.id==req.params.id));
 });

 app.get('/api/courses1',(req,res)=>{
    res.json(courses1);
});
app.get('/api/courses1/:id',(req,res)=>{
     res.json(courses1.find((ele)=>ele.id==req.params.id));
 });

 app.get('/api/videos',(req,res)=>{
    res.json(videos);
});
app.get('/api/videos/:id',(req,res)=>{
     res.json(videos.find((ele)=>ele.id==req.params.id));
 });

 app.get('/api/articles1',(req,res)=>{
    res.json(articles1);
});
app.get('/api/articles1/:id',(req,res)=>{
     res.json(articles1.find((ele)=>ele.id==req.params.id));
 });

 app.get('/api/tasks',(req,res)=>{
    res.json(tasks);
});
app.get('/api/tasks/:id',(req,res)=>{
     res.json(tasks.find((ele)=>ele.id==req.params.id));
 });

 app.get('/api/persons',(req,res)=>{
    res.json(persons);
});
app.listen(8080);