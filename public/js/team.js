$(document).ready(function () {
	setCore();
	setTeam();
	setWeb();
	$(".web-image").hover(function () {
		var headers = $(".code");
		for (var i = headers.length - 1; i >= 0; i--) {
			headers[i].style.transition = "all 0.3s";
			headers[i].style.color="#45C938";
		}

	});
	$(".web-image").mouseleave(function () {
		var headers = $(".code");
		for (var i = headers.length - 1; i >= 0; i--) {
			headers[i].style.transition = "all 1s";
			headers[i].style.color="white";
		}
	});
});
function setCore() {
	var source = $('#display-core').html();
	var template = Handlebars.compile(source);
	var base_url = SITE_BASE_URL + '/profile-images/'
	var core=[
	       {
	           "name":  "Bhargava",
	           "post":  "Chairman",
	           "image": base_url+"DSC_0011.jpg"
	       },
	       {
	           "name":  "Ram Sundaram",
	           "post":  "Treasurer",
	           "image": base_url+"DSC_0042.jpg"
	       },
	       {
	           "name":  "Santhosh",
	           "post":  "Head, OC",
	           "image": base_url+"DSC_0016.jpg"
	       },
	       {
	           "name":  "Veena",
	           "post":  "Head, OC",
	           "image": base_url+"DSC_0008.jpg"
	       },
	       {
	           "name":  "Anirudh",
	           "post":  "Head, Content",
	           "image": base_url+"DSC_0014.jpg"
	       },
	       {
	           "name":  "Abilash",
	           "post":  "Head, Design",
	           "image": base_url+"DSC_0019.jpg"
	       },
	       {
	           "name":  "Varsha",
	           "post":  "Manager",
	           "image": base_url+"DSC_0039.jpg"
	       },
	       {
	           "name":  "Umair",
	           "post":  "Manager",
	           "image": base_url+"DSC_0033.jpg"
	       },
	       {
	           "name":  "Akaash",
	           "post":  "Manager",
	           "image": base_url+"DSC_0026.jpg"
	       },
	       {
	           "name":  "Snehith",
	           "post":  "Manager",
	           "image": base_url+"DSC_0045.jpg"
	       },
	       {
	           "name":  "Naveen",
	           "post":  "Manager",
	           "image": base_url+"DSC_0103.jpg"
	       },
	       {
	           "name":  "Nandini",
	           "post":  "Manager",
	           "image": base_url+"DSC_0101.jpg"
	       },
   ];
	
	var info={};
	info['core'] = core;
	var html = template(info);
	$('#main-container').append(html);
}

function setWeb() {
	var source = $('#display-web').html();
	var template = Handlebars.compile(source);
	var base_url = SITE_BASE_URL + '/profile-images/'
	var core = [
		{
			"name":  "Akshay",
			"post":  "Web Developer",
			"image": base_url + "DSC_0031.jpg"
		},
		{
			"name":  "Tanvi",
			"post":  "Web Developer",
			"image": base_url + "DSC_0022.jpg"
		},
		{
			"name":  "Santosh",
			"post":  "App Developer",
			"image": base_url + "DSC_0047.jpg"
		},
		{
			"name":  "Sudharsan",
			"post":  "App Developer",
			"image": base_url + "sudo.jpg"
		},
	];
	var info={};
	info['core'] = core;
	var html = template(info);
	$('#main-container').append(html);
}


function setTeam() {
	var source = $('#display-team').html();
	var template = Handlebars.compile(source);
	var base_url = SITE_BASE_URL + '/profile-images/';
	var team=[
       	   {
	           "name":  "Aravind",
	           "post":  "Content Writer",
	           "image": base_url+"IMG_8506.JPG"
	       },
	       {
	           "name":  "Adil",
	           "post":  "Content Writer",
	           "image": base_url+"IMG_8454.JPG"
	       },
	       {
	           "name":  "Ipsita",
	           "post":  "Content Writer",
	           "image": base_url+"IMG_8385.JPG"
	       },
	       {
	           "name":  "Aindrila",
	           "post":  "Content Writer",
	           "image": base_url+"IMG_8408.JPG"
	       },
	       {
	           "name":  "Swagata",
	           "post":  "Content Writer",
	           "image": base_url+"IMG_8423.JPG"
	       },
	       {
	           "name":  "Harini",
	           "post":  "Content Writer",
	           "image": base_url+"IMG_8403.JPG"
	       },
	
	       {
	           "name":  "Pooja",
	           "post":  "Organizer",
	           "image": base_url+"IMG_8500.JPG"
	       },
	               {
	           "name":  "Sanjana",
	           "post":  "Organizer",
	           "image": base_url+"IMG_8406.JPG"
	       },
	       {
	           "name":  "Ananthanarayanan",
	           "post":  "Organizer",
	           "image": base_url+"IMG_8409.JPG"
	       },
	       {
	           "name":  "Deepti",
	           "post":  "Organizer",
	           "image": base_url+"IMG_8482.JPG"
	       },
	       {
	           "name":  "Subash",
	           "post":  "Organizer",
	           "image": base_url+"IMG_8412.JPG"
	       },
	       {
	           "name":  "Aman",
	           "post":  "Organizer",
	           "image": base_url+"IMG_8464.JPG"
	       },
	       {
	           "name":  "Anand",
	           "post":  "Organizer",
	           "image": base_url+"IMG_8453.JPG"
	       },
	       {
	           "name":  "Vijay",
	           "post":  "Organizer",
	           "image": base_url+"IMG_8434.JPG"
	       },
	       {
	           "name":  "Evlin",
	           "post":  "Organizer",
	           "image": base_url+"IMG_8430.JPG"
	       },
	       {
	           "name":  "Nilesh",
	           "post":  "Organizer",
	           "image": base_url+"maleplaceholder.jpg"
	       },
	       {
	           "name":  "Madhav",
	           "post":  "Organizer",
	           "image": base_url+"maleplaceholder.jpg"
	       },
	       {
	           "name":  "Srinivas",
	           "post":  "Organizer",
	           "image": base_url+"IMG_8414.JPG"
	       },
	       {
	           "name":  "Kishore",
	           "post":  "Organizer",
	           "image": base_url+"IMG_8504.JPG"
	       },
	       {
	           "name":  "Nitin",
	           "post":  "Organizer",
	           "image": base_url+"IMG_8469.JPG"
	       },
	       {
	           "name":  "Raj",
	           "post":  "Organizer",
	           "image": base_url+"IMG_8459.JPG"
	       },
	       {
	           "name":  "Riddhi",
	           "post":  "Organizer",
	           "image": base_url+"IMG_8510.JPG"
	       },
	       {
	           "name":  "Sanju",
	           "post":  "Organizer",
				 "image": base_url+"IMG_8424.JPG"
	       },
	       {
	           "name":  "Swayamprava",
	           "post":  "Organizer",
	           "image": base_url+"IMG_8512.JPG"
	       },
	       {
	           "name":  "Rahul",
	           "post":  "Organizer",
	           "image": base_url+"IMG_8383.JPG"
	       },
	       {
	           "name":  "Adarsh",
	           "post":  "Organizer",
	           "image": base_url+"IMG_8438.JPG"
	       },
	       {
	           "name":  "Ayush",
	           "post":  "Organizer",
	           "image": base_url+"IMG_8415.JPG"
	       },
	       {
	           "name":  "Diya",
	           "post":  "Organizer",
	           "image": base_url+"IMG_8508.JPG"
	       },
	       {
	           "name":  "Kartikey",
	           "post":  "Organizer",
	           "image": base_url+"IMG_8485.JPG"
	       },
	       {
	           "name":  "Michelle",
	           "post":  "Organizer",
	           "image": base_url+"IMG_8441.JPG"
	       },
	       {
	           "name":  "Raj",
	           "post":  "Organizer",
	           "image": base_url+"maleplaceholder.jpg"
	       },
	       {
	           "name":  "Rengadeva",
	           "post":  "Organizer",
	           "image": base_url+"IMG_8422.JPG"
	       },
	       {
	           "name":  "Sahil",
	           "post":  "Organizer",
	           "image": base_url+"IMG_8419.JPG"
	       },
	       {
	           "name":  "Savita",
	           "post":  "Organizer",
	           "image": base_url+"IMG_8432.JPG"
	       },
	       {
	           "name":  "Uttish",
	           "post":  "Organizer",
	           "image": base_url+"IMG_8427.JPG"
	       },
	       {
	           "name":  "Vijay",
	           "post":  "Organizer",
	           "image": base_url+"maleplaceholder.jpg"
	       },
	       {
	           "name":  "George",
	           "post":  "Organizer",
	           "image": base_url+"IMG_8401.JPG"
	       },
	       {
	           "name":  "Kathirvel",
	           "post":  "Organizer",
	           "image": base_url+"IMG_8377.JPG"
	       },
	       {
	           "name":  "Aquif",
	           "post":  "Organizer",
	           "image": base_url+"maleplaceholder.jpg"
	       },
	       {
	           "name":  "Achyut",
	           "post":  "Organizer",
	           "image": base_url+"IMG_8379.JPG"
	       },
	       {
	           "name":  "Ajay",
	           "post":  "Organizer",
	           "image": base_url+"IMG_8392.JPG"
	       },
	       {
	           "name":  "Deeraj",
	           "post":  "Organizer",
	           "image": base_url+"IMG_8384.JPG"
	       },
	       {
	           "name":  "Dhwani",
	           "post":  "Organizer",
	           "image": base_url+"IMG_8394.JPG"
	       },
	       {
	           "name":  "Karthik",
	           "post":  "Organizer",
	           "image": base_url+"IMG_8475.JPG"
	       },
	       {
	           "name":  "Nandhini",
	           "post":  "Organizer",
	           "image": base_url+"IMG_8396.JPG"
	       },
	       {
	           "name":  "Shallypreethika",
	           "post":  "Organizer",
	           "image": base_url+"IMG_8398.JPG"
	       },
	       {
	           "name":  "Tamagno",
	           "post":  "Organizer",
	           "image": base_url+"IMG_8428.JPG"
	       },
	       {
	           "name":  "Amritha",
	           "post":  "Organizer",
	           "image": base_url+"IMG_8491.JPG"
	       },
	       {
	           "name":  "Vamsi",
	           "post":  "Organizer",
	           "image": base_url+"IMG_8444.JPG"
	       },
	       {
	           "name":  "Jaypal",
	           "post":  "Organizer",
	           "image": base_url+"IMG_8467.JPG"
	       },
	       {
	           "name":  "Kunal",
	           "post":  "Organizer",
	           "image": base_url+"IMG_8478.JPG"
	       },
	       {
	           "name":  "Saimothish",
	           "post":  "Organizer",
	           "image": base_url+"IMG_8382.JPG"
	       },
	       {
	           "name":  "Neel",
	           "post":  "Organizer",
	           "image": base_url+"IMG_8477.JPG"
	       },
	       {
	           "name":  "Venkat",
	           "post":  "Organizer",
	           "image": base_url+"IMG_8511.JPG"
	       },
	       {
	           "name":  "Raghuveer",
	           "post":  "Organizer",
	           "image": base_url+"IMG_8411.JPG"
	       },
	       {
	           "name":  "Kshiteesh",
	           "post":  "Organizer",
	           "image": base_url+"IMG_8495.JPG"
	       },
	       {
	           "name":  "Saeed",
	           "post":  "Organizer",
	           "image": base_url+"IMG_8416.JPG"
	       },
	       {
	           "name":  "Harsh Vora",
	           "post":  "Organizer",
	           "image": base_url+"IMG_8418.JPG"
	       },
	       {
	           "name":  "Karthi",
	           "post":  "Organizer",
	           "image": base_url+"IMG_8387.JPG"
	       },
	       {
	           "name":  "Meghna",
	           "post":  "Organizer",
	           "image": base_url+"femaleplaceholder.jpg"
	       },
	       {
	           "name":  "Sahithi",
	           "post":  "Organizer",
	           "image": base_url+"IMG_8407.JPG"
	       },
	       {
	           "name":  "Vishnu",
	           "post":  "Organizer",
	           "image": base_url+"IMG_8516.JPG"
	       },
	       {
	           "name":  "Shailesh",
	           "post":  "Organizer",
	           "image": base_url+"IMG_8517.JPG"
	       },
	       {
	           "name":  "Santhosh",
	           "post":  "Organizer",
	           "image": base_url+"IMG_8380.JPG"
	       },
	       {
	           "name":  "Tarun",
	           "post":  "Organizer",
	           "image": base_url+"IMG_8461.JPG"
	       },
	       {
	           "name":  "Vaibhav",
	           "post":  "Organizer",
	           "image": base_url+"IMG_8417.JPG"
	       },
	       {
	           "name":  "Yash",
	           "post":  "Organizer",
	           "image": base_url+"IMG_8443.JPG"
	       },
	       {
	           "name":  "Ragland",
	           "post":  "Designer",
	           "image": base_url+"IMG_8420.JPG"
	       },
	       {
	           "name":  "Sathwik",
	           "post":  "Designer",
	           "image": base_url+"IMG_8375.JPG"
	       },
	       {
	           "name":  "Aakash",
	           "post":  "Designer",
	           "image": base_url+"maleplaceholder.jpg"
	       },
	       {
	           "name":  "Amogh",
	           "post":  "Designer",
	           "image": base_url+"IMG_8371.JPG"
	       },
	       {
	           "name":  "Yagnesh",
	           "post":  "Designer",
	           "image": base_url+"IMG_8374.JPG"
	       },
	       {
	           "name":  "Mohasin",
	           "post":  "Designer",
	           "image": base_url+"maleplaceholder.jpg"
	       },

   ];
	team=shuffle(team);
	var info={};
	info['team'] = team;
	var html = template(info);
	$('#main-container').append(html);
}
function shuffle(array) {
  // var currentIndex = array.length, temporaryValue, randomIndex;
  // while (0 !== currentIndex) {
  //   randomIndex = Math.floor(Math.random() * currentIndex);
  //   currentIndex -= 1;
  //   temporaryValue = array[currentIndex];
  //   array[currentIndex] = array[randomIndex];
  //   array[randomIndex] = temporaryValue;
  // }
  array.sort(function(a, b) {
    var textA = a.name.toUpperCase();
    var textB = b.name.toUpperCase();
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
  });
  return array;
}
