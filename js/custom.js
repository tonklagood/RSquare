/**
 * struct of building
 * {
 *  buildingName: string
 *  buildingImage: sting(filename)
 *  floor:[]
 * }
 * struct of floor
 * {
 *  floorName: string
 *  floorBlueprint: sting(filename)
 *  place:[]
 * }
 * struct of place
 * {
 *  placeName: string
 *  placeCapacity: string
 *  placeDrumUsage: boolean
 *  placeProjector: boolean
 *  placeMicrophone: boolean
 *  placeSpeaker: boolean
 * }
 */

//Start init

//add building
const building = [];

building.push({
  buildingName: "Dummy building",
  buildingImage: "",
  floor: []
});

//add floor
building
  .find(el => el.buildingName === building[0].buildingName)
  .floor.push({
    floorName: "Dummy floor",
    floorBlueprint: "",
    place: []
  });

//add place
building
  .find(el => el.buildingName === building[0].buildingName)
  .floor.find(el1 => el1.floorName === building[0].floor[0].floorName)
  .place.push({
    placeName: "Dummy place",
    placeCapacity: "50",
    placeDrumUsage: true,
    placeProjector: true,
    placeMicrophone: true,
    placeSpeaker: true
  });

console.log(building);
//end init

//function for pushFloor
function pushFloor(
  placeName,
  placeCapacity,
  placeDrumUsage,
  placeProjector,
  placeMicrophone,
  placeSpeaker
) {
  building
    .find(el => el.buildingName === building[0].buildingName)
    .floor.push({
      floorName: "Dummy floor",
      floorBlueprint: "",
      place: []
    });
}

//function for pushPlace
function pushPlace(
  placeName,
  placeCapacity,
  placeDrumUsage,
  placeProjector,
  placeMicrophone,
  placeSpeaker
) {
  building
    .find(el => el.buildingName === building[0].buildingName)
    .floor.find(el1 => el1.floorName === building[0].floor[0].floorName)
    .place.push({
      placeName: placeName,
      placeCapacity: placeCapacity,
      placeDrumUsage: placeDrumUsage,
      placeProjector: placeProjector,
      placeMicrophone: placeMicrophone,
      placeSpeaker: placeSpeaker
    });
}

$(document).on("click", ".browse-building", function () {
  $("#img-building").click();
  $("#img-building").change(function (e) {
    var fileName = e.target.files[0].name;
    $("#file-building").val(fileName);
  });
});

$(document).on("click", ".browse-blueprint", function () {
  $("#img-blueprint").click();
  $("#img-blueprint").change(function (e) {
    var fileName = e.target.files[0].name;
    $("#file-blueprint").val(fileName);
  });
});

function DrumUsage(F0P0, itsFloor, itsPlace) {
  var DrumUsage = "#DrumUsage" + F0P0;
  if ($("DrumUsageF0P0").prop("checked") === true) $("DrumUsageF0P0").val("1");
  else $("DrumUsageF0P0").val("0");
  // console.log($("DrumUsageF0P0").val())
}

function Projector(F0P0, itsFloor, itsPlace) {
  var Projector = "#Projector" + F0P0;
  if ($(Projector).prop("checked") === true) $(Projector).val("1");
  else $(Projector).val("0");
  // console.log($(Projector).val())
}

function Microphone(F0P0, itsFloor, itsPlace) {
  var Microphone = "#Microphone" + F0P0;
  if ($(Microphone).prop("checked") === true) $(Microphone).val("1");
  else $(Microphone).val("0");
  // console.log($(Microphone).val())
}

function Speaker(F0P0, itsFloor, itsPlace) {
  var Speaker = "#Speaker" + F0P0;
  if ($(Speaker).prop("checked") === true) $(Speaker).val("1");
  else $(Speaker).val("0");
  // console.log($(Speaker).val())
}

function save_detail(F0P0, itsFloor, itsPlace) {
  var Place_Name = "#Place_Name" + F0P0;
  var up_save_h5 = "#h5" + F0P0;
  // console.log($("#Place-NameF0P0").val());
  if ($(Place_Name).val() == "") $(up_save_h5).text("Dummy place");
  else $(up_save_h5).text($(Place_Name).val());
}

function View_Details(F0P0, itsFloor, itsPlace) {
  const curPlaces = building[0].floor[itsFloor].place[itsPlace]
  console.log('view curplace', curPlaces)
  console.log('view detail', F0P0, itsFloor, itsPlace)
  // console.log(F0P0)
  // alert("View_Details" + F0P0)
  my_add_place = "#add_placeF" + itsFloor;
  $("#save").css({
    display: "block"
  });
  $("#my_add_place").css({
    display: "none"
  });
  $("#ModalTitleF0P0").text("Edit Place");
  $('#Place_NameF0P0').val(curPlaces.placeName)
  $('#CapacityF0P0').val(curPlaces.placeCapacity)

  // $("#Place_NameF0P0").val(place_name[itsFloor][itsPlace]);
  // $("#CapacityF0P0").val(place_capacity[itsFloor][itsPlace]);
  // $("#DrumUsageF0P0").val(myDrumUsage[itsFloor][itsPlace]);
  // $("#ProjectorF0P0").val(myProjector[itsFloor][itsPlace]);
  // $("#MicrophoneF0P0").val(myMicrophone[itsFloor][itsPlace]);
  // $("#SpeakerF0P0").val(mySpeaker[itsFloor][itsPlace]);
}

function add_place(floor) {
  pushPlace(
    $("#Place_NameF0P0").val(),
    $("#CapacityF0P0").val(),
    $("#DrumUsageF0P0").prop("checked"),
    $("#ProjectorF0P0").prop("checked"),
    $("#MicrophoneF0P0").prop("checked"),
    $("#SpeakerF0P0").prop("checked")
  );
  // const buildingName =
  const currentFloor = building[0].floor[floor];
  const curPlaces = currentFloor.place;
  console.log("current floor", currentFloor);
  console.log("places", curPlaces);
  let place_h5, place_View_Detail, place_onclick;

  $('#place').html('')

  curPlaces.forEach((e, i) => {
    console.log('e ->', e)

    $('#place').append(
      // `${e.placeName}`
      `<div class="row">
          <div class="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5">
            <h5 id="h5F0P0">${e.placeName}</h5>
          </div>
          <div class="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7">
            <a href = "#"
            onclick = "${`View_Details('F${floor}P${i}','${floor}','${i}')`}"
            id = "View_DetailsF${floor}P${i}" >
              <span class="dark-blue" data-toggle="modal"
                data-target="#add_place_popup_F0">View details</span>
            </a>
          </div>
        </div>`
    )

  });


  // place_h5 = "h5F" + floor + "P" + building[0].floor[floor].place.length;
  // place_View_Detail =
  //   "View_DetailsF" + floor + "P" + building[0].floor[floor].place.length;
  // place_onclick =
  //   "View_Details('F" + floor + "P" + building[0].floor[floor].place.length + "')";



  // $('#place').append('<div class="row"> <
  //     div class = "col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
  //     id = "place" >
  //     <
  //     div class = "row" >
  //     <
  //     div class = "col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5" >
  //     <
  //     h5 id =' + place_h5 + '> Dummy Place </h5>
  //     </div>
  //     <div class = "col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7" >
  //     <
  //     a href = "#"
  //     onclick = ' + place_onclick + ' id = ' + place_View_Detail + '>
  //     <
  //     span class = "dark-blue"
  //     data-toggle = "modal"
  //     data-target = "#add_place_popup_F0" > View details </span> <
  //     /a> <
  //     /div> <
  //     /div> <
  //     /div> <
  //     /div>')

  // $("#place").append(
  //   '<div class="row"> <div class = "col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"id = "place" ><div class = "row" ><div class = "col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5" ><h5 id =' +
  //   place_h5 +
  //   '> Dummy Place </h5></div><div class = "col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7" ><a href = "#"onclick = ' +
  //   place_onclick +
  //   " id = " +
  //   place_View_Detail +
  //   '><span class = "dark-blue"data-toggle = "modal"data-target = "#add_place_popup_F0" > View details </span> </a> </div> </div> </div> </div>'
  // );
  check_Update();
}

function add_place_popup_btn(floor) {
  $("#ModalTitleF0P0").text("Add Place");
  my_add_place = "#add_placeF" + floor;
  $(my_add_place).css({
    display: "block"
  });
  $("#save").css({
    display: "none"
  });
}

$(document).on("click", "#add-floor", function () {
  // alert("This is floor " + floor);
  // $("#floor-template").append(
  //   '<div class="row nothing" id="deleteFloor1"> <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"> <div class="row shadow p-3 mb-3 bg-white rounded"> <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6"> <div class="form-group"> <label for="Floor" ><span class="vdark-blue"><b>Floor</b></span></label > <input type="text" class="form-control" id="Floor" placeholder="Floor G" /> </div> <div class="form-group"> <input type="file" id="img-blueprint" name="img[]" class="file" accept="image/*" /> <label for="Blueprint" ><span class="vdark-blue"><b>Blueprint</b></span></label > <div class="input-group"> <input type="text" class="form-control" disabled placeholder="Upload File" id="file-blueprint" /> <div class="input-group-append"> <button type="button" id="btn" class="browse-blueprint btn btn-primary" > Browse... </button> </div> </div> </div> </div> <div class="col-5 col-sm-5 col-md-5 col-lg-5 col-xl-5"> <label for="Place" ><span class="vdark-blue"><b>Place</b></span></label > <div class="row"> <div class="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5"> <h5>Dummy Place</h5> </div> <div class="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7"> <a href="#"><span>View details</span></a> </div> </div> <div class="row"> <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" > <!-- Button trigger modal --> <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#add_place" > Add Place </button> <!-- Modal --> <div class="modal fade" id="add_place" tabindex="-1" role="dialog" aria-labelledby="add_placeTitle" aria-hidden="true" > <div class="modal-dialog modal-dialog-centered" role="document" > <div class="modal-content"> <div class="modal-header"> <h5 class="modal-title vdark-blue" id="exampleModalLongTitle" > <b>Add Place</b> </h5> <button type="button" class="close" data-dismiss="modal" aria-label="Close" > <span aria-hidden="true">&times;</span> </button> </div> <div class="modal-body"> <div class="container-fluid"> <div class="row"> <div class="col-5 col-sm-5 col-md-5 col-lg-5 col-xl-5" > <div class="form-group"> <label for="Place-Name" ><span class="vdark-blue" ><b>Place Name</b></span ></label > <input type="text" class="form-control" id="Place-Name" placeholder="DUMMY ROOM 3" /> </div> </div> <div class="col-5 col-sm-5 col-md-5 col-lg-5 col-xl-5" > <div class="form-group"> <label for="Capacity" ><span class="vdark-blue" ><b>Capacity</b></span ></label > <input type="text" class="form-control" id="Capacity" placeholder="50" /> </div> </div> <div class="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2" > <div class="form-group"> <p class="vdark-blue" style="padding-top: 80%;" > people </p> </div> </div> </div> <div class="row"> <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6" > <div class="form-check"> <input class="form-check-input" type="checkbox" value="" id="Drum_Usage" /> <label class="form-check-label" for="Drum Usage" > Drum Usage </label> </div> </div> <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6" > <div class="form-check"> <input class="form-check-input" type="checkbox" value="" id="Projector" /> <label class="form-check-label" for="Projector" > Projector </label> </div> </div> </div> <div class="row"> <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6" > <div class="form-check"> <input class="form-check-input" type="checkbox" value="" id="Microphone" /> <label class="form-check-label" for="Microphone" > Microphone </label> </div> </div> <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6" > <div class="form-check"> <input class="form-check-input" type="checkbox" value="" id="Speaker" /> <label class="form-check-label" for="Speaker" > Speaker </label> </div> </div> </div> </div> </div> <div class="modal-footer"> <button type="button" class="btn btn-secondary" data-dismiss="modal" > Close </button> <button type="button" class="btn btn-primary"> Add </button> </div> </div> </div> </div> </div> </div> </div> <div class="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1"> <button type="button" onclick="deleteFloor1()" class="close" name="deleteFloor1" data-dismiss="modal" aria-label="Close" > <span aria-hidden="true">&times;</span> <script> function deleteFloor1() { alert("Hello"); $("div").remove("#deleteFloor1"); } </script> </button> </div> </div> </div> </div> '
  // );
});

$(document).on("click", "#delete-floor", function () {
  $("div").remove(".nothing");
});

function check_Update() {
  // for (i = 0; i <= floor; i++) {
  //   console.log("this is floor", floor)
  //   for (j = 0; j <= place; j++) {
  //       console.log("this is place", place)
  //     // alert(place_name[floor][place])
  //     // console.log(floor, place, place_name[floor][place])
  //     let check_Update_h5 = "#h5F" + i + "P" + j
  //     // console.log(check_Update_h5, place_name[floor][place])
  //     $(check_Update_h5).text(place_name[floor][place])
  //   }
  // }
  // building.forEach((element_building, index_building) => {
  //   console.log("Element", element_building)
  //   console.log("myindex", index_building)
  //   element_building.floor.forEach((element_floor, index_floor) => {
  //     console.log("Element", element_floor)
  //     console.log("myindex", index_floor)
  //   })
  // })
  // building.forEach(function (element_building, index_building) {
  //   console.log("Element", element_building)
  //   console.log("myindex", index_building)
  //   element_building.floor.forEach(function (element_floor, index_floor) {
  //     console.log("Element", element_floor)
  //     console.log("myindex", index_floor)
  //   })
  // })
}