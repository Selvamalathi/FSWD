<!DOCTYPE html>
<html>
<head>
    <title>Full Form Elements Example</title>
    <style>
        body {
            font-family: Arial;
            background: #f4f4f4;
            padding: 20px;
        }
        .box {
            width: 500px;
            margin: auto;
            background: bisque;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0px 0px 10px gray;
        }
        input, select, textarea, button {
            width: 100%;
            padding: 10px;
            margin: 8px 0;
            border-radius: 5px;
            border: 1px solid #777;
        }
        button {
            background: green;
            color: white;
            cursor: pointer;
            font-size: 16px;
        }
        #successMsg {
            margin-top: 10px;
            color: green;
            font-weight: bold;
            display: none;
        }
    </style>
</head>
<body>

<div class="box">
    <h2>Registration form</h2>

    <form id="myForm">

        <!-- TEXT INPUT -->
        <label>Full Name:</label>
        <input type="text" name="fullname" required>

        <!-- EMAIL -->
        <label>Email:</label>
        <input type="email" name="email" required>

        <!-- PASSWORD -->
        <label>Password:</label>
        <input type="password" name="password" required>

        <!-- NUMBER -->
        <label>Age:</label>
        <input type="number" name="age" min="1" max="100" required>

        <!-- PHONE -->
        <label>Mobile Number:</label>
        <input type="tel" name="phone" pattern="[0-9]{10}" required>

        <!-- DATE -->
        <label>Date of Birth:</label>
        <input type="date" name="dob" required>

        <!-- TIME -->
        <label>Preferred Time:</label>
        <input type="time" name="time">

        <!-- RADIO -->
        <label>Gender:</label>
        <input type="radio" name="gender" value="Male"> Male 
        <input type="radio" name="gender" value="Female"> Female
        <input type="radio" name="gender" value="Other"> Other

        <br><br>

        <!-- CHECKBOX -->
        <label>Hobbies:</label>
        <input type="checkbox" name="hobby" value="Sports"> Sports
        <input type="checkbox" name="hobby" value="Reading"> Reading
        <input type="checkbox" name="hobby" value="Music"> Music

        <br><br>

        <!-- DROPDOWN -->
        <label>Country:</label>
        <select name="country" required>
            <option value="">-- Select Country --</option>
            <option>India</option>
            <option>USA</option>
            <option>UK</option>
            <option>Canada</option>
        </select>

        <!-- FILE UPLOAD -->
        <label>Upload Your Photo:</label>
        <input type="file" name="photo">

        <!-- TEXTAREA -->
        <label>Address:</label>
        <textarea name="address" rows="3" required></textarea>

        <!-- RANGE -->
        <label>Rating (1 to 10):</label>
        <input type="range" min="1" max="10" name="rating">

        <!-- COLOR PICKER -->
        <label>Choose Color:</label>
        <input type="color" name="favcolor">

        <!-- SUBMIT BUTTON -->
        <button type="submit">Submit</button>

        <p id="successMsg">✔️ Form Submitted Successfully!</p>

    </form>
</div>

<script>
    document.getElementById("myForm").addEventListener("submit", function(event){
        event.preventDefault(); // stops actual submit
        document.getElementById("successMsg").style.display = "block";
    });
</script>

</body>
</html>
