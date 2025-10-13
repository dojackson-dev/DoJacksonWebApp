<?php
/**
 * Do Jackson Connect Form Handler
 * 
 * This PHP script handles form submissions from the Connect page
 * and sends emails to contact@dojackson.com
 * 
 * To use this script:
 * 1. Upload to your web server
 * 2. Update connect.html form action to point to this file
 * 3. Configure email settings below
 */

// Configuration
$to_email = 'contact@dojackson.com';
$from_email = 'noreply@dojackson.com'; // Should be from your domain
$smtp_enabled = false; // Set to true if using SMTP

// CORS headers (if needed)
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Only handle POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// Get form data
$form_type = $_POST['formType'] ?? 'unknown';
$submission_data = $_POST;

// Remove formType from data for email content
unset($submission_data['formType']);

// Create email subject and body
$subject = "New " . ucfirst($form_type) . " Submission - Do Jackson";
$body = "New $form_type submission from Do Jackson website:\n\n";

// Add all form fields to email
foreach ($submission_data as $key => $value) {
    $formatted_key = ucfirst(str_replace(['_', '-'], ' ', $key));
    $body .= "$formatted_key: " . strip_tags($value) . "\n";
}

$body .= "\n\nSubmission Type: $form_type\n";
$body .= "Submitted at: " . date('Y-m-d H:i:s') . "\n";
$body .= "IP Address: " . ($_SERVER['REMOTE_ADDR'] ?? 'Unknown') . "\n";
$body .= "\n---\nThis submission was sent from the Do Jackson Connect form.";

// Email headers
$headers = [
    'From' => $from_email,
    'Reply-To' => $submission_data['email'] ?? $from_email,
    'Content-Type' => 'text/plain; charset=UTF-8',
    'X-Mailer' => 'PHP/' . phpversion()
];

$header_string = '';
foreach ($headers as $key => $value) {
    $header_string .= "$key: $value\r\n";
}

// Send email
$mail_sent = false;

if ($smtp_enabled) {
    // Use PHPMailer or similar SMTP library here
    // This is a placeholder for SMTP configuration
    $mail_sent = false; // Set based on SMTP result
} else {
    // Use PHP's built-in mail() function
    $mail_sent = mail($to_email, $subject, $body, $header_string);
}

// Return response
header('Content-Type: application/json');

if ($mail_sent) {
    echo json_encode([
        'success' => true,
        'message' => 'Form submitted successfully',
        'redirect' => "/confirmation.html?type=$form_type"
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Failed to send email. Please contact us directly at contact@dojackson.com',
        'redirect' => "/confirmation.html?type=$form_type&error=1"
    ]);
}
?>