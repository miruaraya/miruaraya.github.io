CREATE database dbuser (
  `first name` varchar(20) NOT NULL,
  `last name` varchar(20) NOT NULL,
  `Username` varchar(20) NOT NULL,
   `Address` varchar(60) NOT NULL,
  PRIMARY KEY (`Username`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=16 ;
The details will be stored in this database.
register.jsp
<html>
<head>
<title>Registration Form</title>
</head>
<body>
<h1>User Register Form</h1>
<form action="user_register" method="post">
                           <table style="with: 20%">
                                    <tr>
                                              <td>First Name</td>
                                              <td><input type="text" name="first_name" /></td>
                                    </tr>
  <tr>
                                              <td>Last Name</td>
                                              <td><input type="text" name="last_name" /></td>
                                    </tr>
                                    <tr>
                                              <td>UserName</td>
                                              <td><input type="text" name="username" /></td>
                                    </tr>
                                              <tr>
                                              <td>Password</td>
                                              <td><input type="password" name="password" /></td>
                                    </tr>
                                    <tr>
                                              <td>Address</td>
                                              <td><input type="text" name="address" /></td>
                                    </tr>
                           </table>
                           <input type="submit" value="Submit" /></form>
</body>
</html>
