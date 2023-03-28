$(document).ready(function(){
  // $("#username").blur(function(){
  //  if($(this).val()==""){
  //    $(this).css("border","1px solid red");
  //    $("#username").focus();
  //    return false;
  //  }
  //  else{
  //    $(this).css("border","1px solid green");
  //  }
  // })

  
  $("#save").click(function(){
    if($("#username").val()==""){
      $("#username").css("border","1px solid red");
      $("#username").focus();
      return false;
    }
    else{
      $("#username").css("border","1px solid green");
    }
    if($("#email").val()==""){
      $("#email").css("border","1px solid red");
      $("#email").focus();
      return false;
    }
    else{
      $("#email").css("border","1px solid green");
    }
    if($("#phonenumber").val()==""){
      $("phonenumber").css("border","1px solid red");
      $("phonenumber").focus();
      return false;
    }
    else{
      $("#phonenumber").css("border","1px solid green");
    }
    
    $.ajax({
      type:"POST",
      url:"php/register.php",
      dataType:"json",
      //data:{"uname":username,"pass":password},
      data:$("#loginForm").serialize(),
      success:function(res){
        if(res.status=="Done"){
          window.location="login.html";
        }
      }

    })
  })
})