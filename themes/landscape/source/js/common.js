$(function(){
    var div = document.getElementsByClassName('post');
        var all = document.body.getElementsByTagName('*');
        function setCss3(ele){
            ele.style.transform = 'translateY(0px)';
            ele.style.opacity = '.9';
            ele.style.WebkitTransform = 'translateY(0px)';
        }
        window.onscroll = aaa;
        function aaa(){
            var top = document.body.scrollTop || document.documentElement.scrollTop;
            var scrollHeight =   document.documentElement.scrollHeight ;
            var height=   document.documentElement.clientHeight
           
            $('#footer').hide()
            $('nav[role=banner]').animate({'top':-top},20);
            if(top+height == scrollHeight){
                
                $('#footer').show()
            }
           

            
            for (var i = 0; i < div.length; i++) {
                
                if(document.body.scrollTop+document.documentElement.clientHeight> div[i].offsetTop){
                     setCss3(div[i]);
                }
            }
        }
        aaa();
})