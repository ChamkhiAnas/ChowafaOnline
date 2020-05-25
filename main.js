
// let app=new Vue({

//     el:"#app",
//     data:{
//         msg:"hello!",
//         age:27,
//         tag1:"<em>Hello World</em>",
//         users:[
//             {name:"John Doe",email:"chamkhianas@gmail.Com"},
//             {name: "Steve smith",email:"stever@gmail.com"},
//             {name:"Jane Doe",email:"jane Doe"}
//         ],
//         link:"https://www.twitter.com",
//         foo:true,
//         user:{
//             name:"John Doe",email:"chamkhianas@gmail.Com",

//         },
//         club:"rca",
//         iSchecked:true,
//         names:[],
//         radioPick:'',
//         selected:'',
//         options:[
//             {text:"One",value:'A'},
//             {text:"Two",value:'B'},
//             {text:"Three",value:'C'},
//         ],
//         Ss:[],
//         counter:0,
//         num:5,
//         show:true,
//         show1:true,
//         firstName:'Anas',
//         lastName:'Chamkhi',
//         fullName:'Anas  Chamkhi',
//         email:"Chamkhianas@gmail.com",
//         address:"16 rue 47 que kaouki"

//     },


//     watch:{
//         firstName:function(value){
//             this.fullName= value + ''+this.lastName
//         },
//         lastName:function(value){ 
//             this.fullName= this.firstName+''+value 
//         }
//     },

//     computed:{
//         // fulladdress:function(){
//         //     return this.email + " " + this.address;
//         // }
//         fulladdress:{
//             get:function(){
//                 return this.email + ' ' + this.address;
        
//                },
//                set:function(value){
//                 let names=value.split(' ');
//                 this.email=names[0];
//                 this.address=names[names.length-1];
//                }
//         }
    
        
//     },

//     methods:{

//         greet:function(data,event){
//             // alert("Hi there how are u doing ? " + data);
//             console.log(event.target.className)
//         },
//         keypress:function(event){
//             console.log(event.target.value)
//         },
//         keySubmit:function(){
//             console.log('Enter Hit')
//         },
//         formSubmit:function(){
//             alert(this.msg)
//         }

//     },

//     filters:{

//         Maj:function(value){

//             if(!value) return  '';
//             value=value.toString();
//             return value.toUpperCase();

//         },
//         Cap:function(value){
//             if(!value) return  '';
//             value=value.toString();
//             return value.charAt(0).toUpperCase() + value.slice(1)
//         },
//         double:function(value){

//             return value*2

//         },
//         currency:function(value){
//             return value+ ' ' + '$'  + ' ' +'USD'
//         }

//     }

// });

let app=new Vue({
    el:"#app2",
    data:{
        question:'',
        answer:'',
        image: ''
    
    },
    watch:{
        question:function(){
            this.answer='Waiting for you to stop typing ... ';
            this.getAnswer();  
        }
    },
    methods:{
        getAnswer:_.debounce(
            function(){
                let vm = this
                if  (vm.question.indexOf('?')===-1){
                    vm.answer="Questions usually have a questionmark"
                    return 
                }
                vm.answer="Thinking ..."
                axios.get('https://yesno.wtf/api')
                    .then(function(response){
                        vm.answer=_.capitalize(response.data.answer)
                        vm.image=response.data.image
                    })
                    .catch(function(err){
                        vm.answer='Error ' + err;
                    })
            },500
        )
    }
});


