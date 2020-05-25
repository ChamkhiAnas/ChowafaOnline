
let app=new Vue({
    el:"#chowafa",
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


