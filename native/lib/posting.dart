import 'package:flutter/material.dart';
import 'dart:async';
import 'package:intl/intl.dart';


class Posting extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Color.fromARGB(0, 60, 95, 150),
      body: Container(
        decoration: const BoxDecoration(
          image: DecorationImage(
            image: AssetImage('assets/images/posting.jpg'),
            fit: BoxFit.cover,
          ),
        ),
        child: Center(
          child: Container(
            width: 300,
            height: 500,
            decoration: BoxDecoration(color: Color.fromRGBO(255, 250, 240, .95),),
            padding: EdgeInsets.symmetric(horizontal: 0, vertical: 25),
            child: SingleChildScrollView(
              child: Column(
                mainAxisSize: MainAxisSize.min,
                children: <Widget>[
                  ClockTimer(),
                  SizedBox(
                    width: 150,
                    height: 75,
                    child: ElevatedButton(
                      onPressed: () {},
                      child: const Text(
                        '追加',
                        style: TextStyle(
                          color: Color.fromRGBO(255, 250, 240, 1),
                          fontSize: 20,
                        ),
                      ),
                      style: ButtonStyle(
                        backgroundColor: MaterialStateProperty.resolveWith<Color>(
                              (Set<MaterialState> states) {
                            if (states.contains(MaterialState.pressed)) {
                              return Color.fromRGBO(25, 150, 150, 1);
                            }
                            return Color.fromRGBO(250, 75, 75, 1);
                          },
                        ),
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}


class ClockTimer extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    return _ClockTimerState();
  }
}

class _ClockTimerState extends State<ClockTimer> {
  /// タイマー文字列用
  String _time = '';

  @override
  void initState() {
    super.initState();
    /// Timer.periodic は繰り返し実行する時に使うメソッド
    Timer.periodic(Duration(seconds: 1), _onTimer);
  }

  @override
  Widget build(BuildContext context) {
    return Text(
        _time,
        style: TextStyle(
            fontSize: 60,
            color: Color.fromRGBO(50, 25, 25, 1),
        )
    );
  }

  void _onTimer(Timer timer) {
    /// 現在時刻を取得する
    var now = DateTime.now();
    /// 「時:分:秒」表記に文字列を変換するdateFormatを宣言する
    var dateFormat = DateFormat('HH:mm:ss');
    /// nowをdateFormatでstringに変換する
    var timeString = dateFormat.format(now);
    setState(() => {
      _time = timeString
    });
  }
}
