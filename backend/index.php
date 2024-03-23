<?php
// Load PHPMailer Autoloader
require './vendor/phpmailer/phpmailer/src/PHPMailer.php';
require './vendor/phpmailer/phpmailer/src/SMTP.php';
require './vendor/phpmailer/phpmailer/src/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;


if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $inputJSON = file_get_contents('php://input');
    $input = json_decode($inputJSON, true);

    // Validate form data
    if (empty($input["first_name"]) || empty($input["last_name"]) || empty($input["email"])) {
        echo json_encode(array("success" => false, "message" => "Please fill in all required fields."));
        exit;
    }

    // Sanitize form data
    $first_name = htmlspecialchars($input["first_name"]);
    $last_name = htmlspecialchars($input["last_name"]);
    $email = htmlspecialchars($input["email"]);
    $phone_number = isset($input["phone_number"]) ? htmlspecialchars($input["phone_number"]) : "";
    $message = isset($input["message"]) ? htmlspecialchars($input["message"]) : "";
    $agree_terms = isset($input["agree_terms"]) ? ($input["agree_terms"] == "true" ? true : false) : false;

    // Create an array with form data
    $form_data = array(
        "first_name" => $first_name,
        "last_name" => $last_name,
        "email" => $email,
        "phone_number" => $phone_number,
        "message" => $message,
        "agree_terms" => $agree_terms
    );

    // Save form data to a JSON file
    $file_path = "form_data.json";
    $current_data = file_get_contents($file_path);
    $current_data = json_decode($current_data, true);
    $current_data[] = $form_data;
    $encoded_data = json_encode($current_data, JSON_PRETTY_PRINT);
    file_put_contents($file_path, $encoded_data);

    try {
        // Create a new PHPMailer instance
        $mail = new PHPMailer(true);

        // Server settings for Gmail SMTP
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username   = 'tempahamed@gmail.com';                     
        $mail->Password   = 'agzy ktof eiqg ejrj';  
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        // Set email content
        $mail->setFrom('tempahamed@gmail.com', 'Admin');
        $mail->addAddress($email, $first_name . ' ' . $last_name);
        $mail->Subject = 'Thank you for your submission';
        $mail->Body = "Dear $first_name $last_name,\n\nThank you for submitting the form. We have received your information and will get back to you soon.\n\nBest regards,\nYour Company";
        $mail->isHTML(false);

        // Send email
        $mail->send();

        // Send admin email
        $mail->clearAddresses(); 
        $mail->addAddress('tempahamed@gmail.com', 'Admin');
        $mail->Subject = 'New Form Submission';
        $mail->Body = "A new form submission has been received.\n\nDetails:\n\nFirst Name: $first_name\nLast Name: $last_name\nEmail: $email\nPhone Number: $phone_number\nMessage: $message\nAgreed to Terms: " . ($agree_terms ? "Yes" : "No");
        $mail->send();

        // Return success response
        echo json_encode(array("success" => true, "message" => "Form submitted successfully."));
    } catch (Exception $e) {
        // Handle email sending errors
        echo json_encode(array("success" => false, "message" => "Error: {$mail->ErrorInfo}"));
    }
}
?>
