$(document).ready(function () {

	$(window).scroll(function(){
	  var ws = $(this).scrollTop();
		if ( ws == 0 ) {
			$(".header-main, header").css({
		    'border-width' : '0 0 1px 0'
		  });
		} else if( ws > 0 ) {
			$(".header-main, header").css({
		    'border-width' : '0 0 3px 0'
		  });
		}
	});

	$( '.upfile' ).each( function()
	{
    console.log('uprun');
		var $input	 = $( this ),
			$label	 = $input.next( 'label' ),
			labelVal = $label.html();

		$input.on( 'change', function( e )
		{
      console.log('inp run');
			var fileName = '';
      console.log('this files - '+this.files[0].name + "len-" + this.files.length);

			if( this.files && this.files.length > 1 ){
        fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
      }
			else if( e.target.value ){
        //fileName = this.files[0].name;
        fileName = e.target.value.split( '\\' ).pop();
      }

			if( fileName ){
        $("#uplab").html(fileName);
      }
			else{
        $("#uplab").html(labelVal);
				console.log('lab');
      }
      console.log('file- ' + e.target.value);
      console.log('filename- ' + fileName);
      //$label.html(filename);


		});

		// Firefox bug fix
		$input
		.on( 'focus', function(){ $input.addClass( 'has-focus' ); })
		.on( 'blur', function(){ $input.removeClass( 'has-focus' ); });
	});

  var edlist = ['B.A', 'B.Sc', 'B.Tech', 'B.Ba', 'B.Com', 'MCa'];
  var edpglist = ['M.A', 'M.Sc', 'M.Tech', 'M.Ba', 'M.Com', 'MCa'];
  var bsc = ['Physics', 'Maths', 'CS', 'Chemistry'];
  var bca = ['Html', 'Java', 'Operating System', 'Networking'];
  var bba = ['Business Economics', 'Marketing Management', 'Business Statics', 'Operations Research'];
  var sem = [1, 2, 3, 4, 5, 6];

  $('.st-slt').on('change',function() {
    var item = $(this).find("option:selected").val();
    var st = item;
    var subs = '';
    subs = item;
    console.log('Sub-> ' + subs);
    console.log($(this).find("option:selected").text());
    //makereq(item, 'st-sub', 'st-sem', 'st-sub-inner', 'st-sbj', 'st_sbj');

    /*$.ajax({
        type: "POST",
        data: {refer: 'item', dt: item},
        url: "core/worker.php",
        success: function(data){
          var myObj = JSON.parse(data);
          alert(myObj);
          $(".st-sub, .st-sem").empty();
          $(".st-sub").css({'display':'block', "margin-top": "20px"});
          $(".st-sub").append("<div class='st-sub-inner'><select class='st-sbj' name='st_sbj' id='' required></select></div>");
          for (var i = 0; i < myObj.length; i++) {
            //$('.c-temp').append('<div class="us_m_c mm'+i+'">'+'<div class="c_head">'+'<h3>'+myObj[i]['data']['title']+'</h3>'+'<h6>'+myObj[i]['data']['deadline']+'</h6>'+'</div>'+'<div class="sc-info">'+'<p>'+ myObj[i]['data']['des'] +'</p>'+'</div>'+'<div class="read-d rr'+i+'"><span class="read-m new-r">Read More..</span></div>'+'</div>');
            $(".st-sbj").append("<option>"+myObj[i]+"</option>");
          }
        }
    });*/

    //mainf(item, 'st-sub', 'st-sem', 'st-sub-inner', 'st-sbj', 'st_sbj')

    $(".st-sub, .st-sem").empty();
    $(".st-sub").css({'display':'block', "margin-top": "20px"});

    $(".st-sub").append("<div class='st-sub-inner'><select class='st-sbj' name='st_sbj' id='' required> <option value=''>Subject</option> </select></div>");
    var myItems = [];
    function loop_ed(val) {
      myItems.push( "<option>"+val+"</option>" );
    }
    var myList = $( ".st-sbj" );
    if (item === 'bsc') {
      bsc.forEach(loop_ed);
    } else if (item === 'bca'){
      bca.forEach(loop_ed);
    } else if (item === 'bba'){
      bba.forEach(loop_ed);
    } else{
      $(".st-sub, .st-sem").empty();
      $(".st-sub, .st-sem").css({'display':'none'});
    }
    myList.append( myItems.join( "" ) );

    /*if (item === 'bscc') {
      $(".st-sub, .st-sem").empty();
      $(".st-sub").css({'display':'block', "margin-top": "20px"});

      $(".st-sub").append("<div class='st-sub-inner'><select class='st-sbj' name='st_sbj' id='' required></select></div>");
      var myItems = [];
      function loop_ed(val) {
        myItems.push( "<option>"+val+"</option>" );
      }
      var myList = $( ".st-sbj" );
      bsc.forEach(loop_ed);
      myList.append( myItems.join( "" ) );

    } else if(item === 'Bca'){
      $(".st-sub, .st-sem").empty();
      $(".st-sub").css({'display':'block', "margin-top": "20px"});
      var myItems = [];
      function loop_ed(val) {
        myItems.push( "<option>"+val+"</option>" );
      }
      $(".st-sub").append("<div class='st-sub-inner'><select class='st-sbj' name='st_sbj' id='' required></select></div>");
      var myList = $( ".st-sbj" );
      edpglist.forEach(loop_ed);
      myList.append( myItems.join( "" ) );
    } else{
      /*$(".st-sub, .st-sem").empty();
      $(".st-sub, .st-sem").css({'display':'none'});*/
    //}*/

    $('.st-sbj').on('change',function() {
      console.log("sbj ran");
      var item = $(this).find("option:selected").val();
      var sbj = item;
      console.log('Sub-> ' + subs);
      //console.log('Complete-> ' + st+' '+sbj+' '+sem);
      //var subs = '';
      //subs += ',' + item
      //item = 'sem';
      console.log('req made'+item);
      $(".st-sem").empty();
      $(".st-sem").css({'display':'block', "margin-top": "20px"});
      $(".st-sem").append("<div class='st-sem-inner'><select class='st-semst' name='st_sem' id='' required> <option value=''>Sem</option> </select></div>");
      var myItems = [];
      function loop_ed(val) {
        myItems.push( "<option value="+ val +"><a href='#'>" +val+ "</a></option>" );
      }
      var myList = $( ".st-semst" );
      sem.forEach(loop_ed);
      myList.append( myItems.join( "" ) );
      //makereq(item, 'st-sem', 'st-se', 'st-sem-inner', 'st-semst', 'st_sem');

      /*if (item === 'Physics') {
        $(".st-sem").empty();
        $(".st-sem").css({'display':'block', "margin-top": "20px"});
        $(".st-sem").append("<div class='st-sem-inner'><select class='st-semst' name='st_sem' id='' required></select></div>");
        var myItems = [];
        function loop_ed(val) {
          myItems.push( "<option value="+ val +"><a href='#'>" +val+ "</a></option>" );
        }
        var myList = $( ".st-semst" );
        sem.forEach(loop_ed);
        myList.append( myItems.join( "" ) );
      } else if (item === 'Maths') {
        $(".st-sem").empty();
        $(".st-sem").css({'display':'block', "margin-top": "20px"});
        $(".st-sem").append("<div class='st-sem-inner'><select class='st-semst' name='st_sem' id='' required></select></div>");
        var myItems = [];
        function loop_ed(val) {
          myItems.push( "<option value="+ val +"><a href='#'>" +val+ "</a></option>" );
        }
        var myList = $( ".st-semst" );
        sem.forEach(loop_ed);
        myList.append( myItems.join( "" ) );
      }else {
        $(".st-sem").empty();
        $(".st-sem").css({'display':'none'});
      }*/

      $('.st-semst').on('change',function() {
        var item = $(this).find("option:selected").val();
        var sem = item;
        //subs += ',' + item
        var all = subs + "," + sbj + "," + sem;
        console.log(item);
        console.log('all-> ' + all);

        console.log('Complete-> ' + st+' '+sbj+' '+sem);
        $.ajax({
            type: "POST",
            data: {refer: 'item', dt: all},
            url: "core/worker.php",
            success: function(data){
              alert(data);
              window.location.href = 'http://localhost/tests/00notes/notes.php';
              /*var myObj = JSON.parse(data);
              for (var i = 0; i < myObj.length; i++) {
                $('.c-temp').append('<div class="us_m_c mm'+i+'">'+'<div class="c_head">'+'<h3>'+myObj[i]['data']['title']+'</h3>'+'<h6>'+myObj[i]['data']['deadline']+'</h6>'+'</div>'+'<div class="sc-info">'+'<p>'+ myObj[i]['data']['des'] +'</p>'+'</div>'+'<div class="read-d rr'+i+'"><span class="read-m new-r">Read More..</span></div>'+'</div>');
              }*/
            }
        });
        /*if (item === 1){
          window.location.href = '12.php';
        } else if(item === 2){
          window.location.href = '#';
        } else if(item === 3){
          window.location.href = '#';
        } else if(item === 4){
          window.location.href = '#';
        } else if(item === 5){
          window.location.href = '#';
        } else if(item === '6'){
          window.location.href = 'http://localhost/tests/00notes/notes.php';
        } else {
          window.location.href = '#';
        }*/
      });
    });
    console.log('Sub-> ' + subs);

  });
  $('.st-sub').on('hover',function() {
    console.log('next...');
  });

	$('.up-slt').on('change',function() {
    var item = $(this).find("option:selected").val();
    var st = item;

    $(".up-sub, .up-sem").empty();
    $(".up-sub").css({'display':'block'});

    $(".up-sub").append("<div class='up-sub-inner'><select class='up-sbj' name='up_sbj' id='' required> <option value=''>Subject</option> </select></div>");
    var myItems = [];
    function loop_ed(val) {
      myItems.push( "<option value="+ val +">" +val+"</option>" );
    }
    var myList = $( ".up-sbj" );
    if (item === 'bsc') {
      bsc.forEach(loop_ed);
    } else if (item === 'bca'){
      bca.forEach(loop_ed);
    } else if (item === 'bba'){
      bba.forEach(loop_ed);
    } else{
      $(".up-sub, .up-sem").empty();
      $(".up-sub, .up-sem").css({'display':'none'});
    }
    myList.append( myItems.join( "" ) );

    $('.up-sbj').on('change',function() {
      console.log("up-sbj ran");
      var item = $(this).find("option:selected").val();
      var sbj = item;
    	console.log('up req made|'+item+'|');
      $(".up-sem").empty();
      $(".up-sem").css({'display':'block'});
      $(".up-sem").append("<div class='up-sem-inner'><select class='up-semst' name='up_sem' id='' required><option value=''>SEM</option></select></div>");
      var myItems = [];
      function loop_ed(val) {
        myItems.push( "<option value="+ val +">" +val+ "</option>" );
      }
      var myList = $( ".up-semst" );
			if (!item == '') {
				sem.forEach(loop_ed);
	    }else{
				$(".up-sem").empty();
	      $(".up-sem").css({'display':'none'});
	    }
      //sem.forEach(loop_ed);
      myList.append( myItems.join( "" ) );

      $('.up-semst').on('change',function() {
        var item = $(this).find("option:selected").val();
        var sem = item;
        //console.log('up Complete-> ' + st+' '+sbj+' '+sem);
        /*$.ajax({
            type: "POST",
            data: {refer: 'item', dt: all},
            url: "core/worker.php",
            success: function(data){
              alert(data);
              window.location.href = 'http://localhost/tests/00notes/notes.php';
            }
        });*/
  });
	});
	});

  function refresh() {
    $("."+mclass).empty();
    $("."+mclass).css({'display':'block', "margin-top": "20px"});
  }

	function err(){
		var obj=document.getElementById("err");
		window.setTimeout(function remove(){obj.style.display='none'},4000);
	}
	err();

  function mainf(item, subclass, ssubclass, apdiv, apslt, apslname) {
    var  it = item;
    console.log("type-> " + typeof bsc);
    console.log('it = ' + '|'+it+'|');
    $("."+subclass+", ."+ssubclass).empty();
    $("."+subclass).css({'display':'block', "margin-top": "20px"});

    $("."+subclass).append("<div class= "+ "'" + apdiv + "'" +" ><select class= " + "'" + apslt + "'" + " name= "+ "'" + apslname + "'" +" id='' required></select></div>");
    adds(item,apslt)

    //$("."+apslt).append("<option>"+ val +"</option>");
  }

  function adds(item,apslt) {
    var myItems = [];
    function loop_ed(val) {
      myItems.push( "<option>"+val+"</option>" );
    }
    var myList = $( "."+apslt );
    bsc.forEach(loop_ed);
    var ite = item + "[" +i+ "]";
    for (var i = 0; i < 4; i++) {
      console.log("<option>"+ item + "[" +i+ "]" +"</option>" + "ite-"+ite[0]);
    }
    myList.append( myItems.join( "" ) );
  }

  function makereq(item, subclass, ssubclass, apdiv, apslt, apslname) {
    $.ajax({
        type: "POST",
        data: {refer: 'item', dt: item},
        url: "core/worker.php",
        success: function(data){
          alert('done');
          var myObj = JSON.parse(data);
          $("."+subclass+", ."+ssubclass).empty();
          $("."+subclass).css({'display':'block', "margin-top": "20px"});
          $("."+subclass).append("<div class="+ "'" + apdiv + "'" +"><select class=" + "'" + apslt + "'" + " name= "+ "'" + apslname + "'" +" id='' required></select></div>");
          for (var i = 0; i < myObj.length; i++) {
            //$('.c-temp').append('<div class="us_m_c mm'+i+'">'+'<div class="c_head">'+'<h3>'+myObj[i]['data']['title']+'</h3>'+'<h6>'+myObj[i]['data']['deadline']+'</h6>'+'</div>'+'<div class="sc-info">'+'<p>'+ myObj[i]['data']['des'] +'</p>'+'</div>'+'<div class="read-d rr'+i+'"><span class="read-m new-r">Read More..</span></div>'+'</div>');
            if (myObj[i].length>0) {
              $("."+apslt).append("<option value="+myObj[i]+">"+myObj[i]+"</option>");
            }
          }
        }
    });
  }

	$("#up-f").on('submit',(function(e) {
		$("#upbtn").value = "Uploading . . ";
  e.preventDefault();
  $.ajax({
		xhr: function() {
			var xhr = new window.XMLHttpRequest();

			xhr.upload.addEventListener("progress", function(evt) {
				if (evt.lengthComputable) {
					var percentComplete = evt.loaded / evt.total;
					percentComplete = parseInt(percentComplete * 100);
					$('#err').html(percentComplete+'%');
					//$('.progress-bar').width(percentComplete+'%');
					//$('.progress-bar').html(percentComplete+'%');
				}
			}, false);

			return xhr;
		},
		url: "core/worker.php",
		type: "POST",
		data:  new FormData(this),
		contentType: false,
		cache: false,
		processData:false,
		success: function(data){
			$("#upbtn").value = "UPLOADED";
			//$('#err').html(data);
			$("#err").css({'display' : 'block'});
			$('#err').html(data);
			setTimeout(function () {
				$("#err").css({'display' : 'none'});
			 }, 5000);
		}
	});
 }));

})
