<?php
$output = ["status" => 0];
switch ($_GET["action"]) {
    case "login":
        $_POST = json_decode(file_get_contents("php://input"), true);
        if (isset($_POST["name"]) && isset($_POST["password"])) {
            $name = $_POST["name"];
            $password = $_POST["password"];
            if (($name == "admin") && ($password == "admin")) {
                session_start();
                $_SESSION["logged"] = true;
                $output["status"] = 1;
            }
        }
        break;
    case "logout":
        if (isset($_SESSION["logged"]) && ($_SESSION["logged"] == "true")) {
            session_destroy();
            $output["status"] = 1;
        }
        break;
    case "check":
        if(isset($_SESSION["logged"]) && ($_SESSION["logged"]==true)) {
            $output["status"] = 1;
        }else {
            session_destroy();
        }
        break;
}

echo json_encode($output, JSON_UNESCAPED_UNICODE);