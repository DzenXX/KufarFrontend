<?php
    $conn = mysqli_connect("localhost", "root", "", "placemarksDatabase");
    if (!$conn) {
        die("Ошибка: " . mysqli_connect_error());
    }

    $idTemp1 = $conn->query("SELECT id FROM placemarks");
    for ($i = 0; $idTemp2 = $idTemp1->fetch_array(); $i++) {
        $checker[$i] = $idTemp2["id"];
    }

    for ($i = 0; $i < count($checker); $i++) {
        $temp1 = $conn->query("SELECT * FROM placemarks WHERE id = $checker[$i]");
        $temp2 = $temp1->fetch_row();
        $result[$i] = $temp2;
    }

    $json = json_encode($result);
    echo $json;

    mysqli_close($conn);
?>