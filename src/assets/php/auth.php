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
        session_start();
        if (isset($_SESSION["logged"]) && ($_SESSION["logged"] == true)) {
            session_destroy();
            $output["status"] = 1;
        }
        break;
    case "check":
        session_start();
        if (isset($_SESSION["logged"]) && ($_SESSION["logged"] == true)) {
            $output["status"] = 1;
        } else {
            session_destroy();
        }
        break;
}

header("Content-Type: application/json; charset=UTF-8");
header("Cache-Control: no-cache, no-store, must-revalidate");
header("Pragma: no-cache");
header("Expires: 0");

echo json_encode($output, JSON_UNESCAPED_UNICODE);