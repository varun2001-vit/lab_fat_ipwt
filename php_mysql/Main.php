<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <label for="name">Name</label>
    <input type="text" id="name"><br>
    <label for="age">Age</label>
    <input type="number" id="age"><br>
    <label for="course">Course</label>
    <input type="text" id="course"><br>
    <button type="button" name="sumbit" id="button" onclick="getValue('add')" value="add">Add</button>
    <button type="button" name="sumbit" id="button" onclick="getValue('delete')" value="delete">Delete</button>
    <button type="button" name="sumbit" id="button" onclick="getValue('update')" value="update">Update</button>
    <button type="button" name="sumbit" id="button"  onclick="getValue('search')" value="search">Search</button>
    <p id="result"></p>
    <script src="index.js"></script>
</body>
</html>