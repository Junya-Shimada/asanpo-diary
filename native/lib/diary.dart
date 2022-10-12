import 'package:flutter/material.dart';

class Diary extends StatelessWidget{
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Color.fromARGB(0,60,95,150),
      body: Container(
        decoration: const BoxDecoration(
            image: DecorationImage(
              image: AssetImage('assets/images/diary.jpg'),
              fit: BoxFit.cover,
            )
        ),
        child: Center(
          child: Text(
            '',
            style: TextStyle(
              color: Colors.white,
              fontSize: 30,
            ),
          ),
        ),
      ),
    );
  }
}