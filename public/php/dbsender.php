<?php 

    if (isset($_POST["hintHTML"]) && isset($_POST["balloonTextHTML"]) && isset($_POST["balloonImgHTML"]) && isset($_POST["coordsLon"]) && isset($_POST["coordsLon"])) {

        $result = array(
            'hintHTML' => $_POST["hintHTML"],
            'balloonTextHTML' => $_POST["balloonTextHTML"],
            'balloonImgHTML' => $_POST["balloonImgHTML"],
            'coordsLat' => $_POST["coordsLat"],
            'coordsLon' => $_POST["coordsLon"],
        );

        $hintHTML = $_POST["hintHTML"];
        $balloonTextHTML = $_POST["balloonTextHTML"];
        $balloonImgHTML = $_POST["balloonImgHTML"];
        $coordsLat = $_POST["coordsLat"];
        $coordsLon = $_POST["coordsLon"];

        $json = json_encode($result); 
        echo $json;

    }

    if ( ($hintHTML != null) && ($balloonTextHTML != null) && ($balloonImgHTML != null) && ($coordsLat != null) && ($coordsLon != null)) {
        $conn = mysqli_connect("localhost", "root", "", "placemarksDatabase");
        if (!$conn) {
          die("Ошибка: " . mysqli_connect_error());
        }

        $idTemp1 = $conn->query("SELECT id FROM placemarks");
        for ($i = 0; $idTemp2 = $idTemp1->fetch_array(); $i++) {
            $checker[$i] = $idTemp2["id"];
        }

        for ($i = 0; $i <= end($checker); $i++) {
            if (!in_array($i, $checker)) {
                $sql = "INSERT INTO placemarks VALUES ($i, 'DBPlacemark$i', $coordsLat, $coordsLon, '$hintHTML', '$balloonTextHTML', '$balloonImgHTML')";
                if(mysqli_query($conn, $sql)){
                    echo "Данные успешно добавлены";
                } else{
                //echo "Ошибка: " . mysqli_error($conn);
                }
                break;
            } else if ($i == end($checker)) {
                $sql = "INSERT INTO placemarks VALUES ($i+1, 'DBPlacemark$num', $coordsLat, $coordsLon, '$hintHTML', '$balloonTextHTML', '$balloonImgHTML')";
                if(mysqli_query($conn, $sql)){
                    echo "Данные успешно добавлены";
                } else{
                //echo "Ошибка: " . mysqli_error($conn);
                }
                break;
            }
        }
       
        mysqli_close($conn);
    }
?>