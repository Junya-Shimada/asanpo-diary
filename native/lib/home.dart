import 'package:flutter/material.dart';
import 'package:yoridokoro/top.dart';
import 'package:yoridokoro/posting.dart';
import 'package:yoridokoro/diary.dart';
import 'package:yoridokoro/hint.dart';
import 'package:yoridokoro/setting.dart';
import 'package:persistent_bottom_nav_bar/persistent_tab_view.dart';





class Home extends StatefulWidget {
  const Home({Key? key}) : super(key: key);

  @override
  _HomeState createState() => _HomeState();
}

class _HomeState extends State<Home> {
  var _pages = <Widget>[
    Top(),
    Diary(),
    Posting(),
    Hint(),
    Setting(),
  ];



  @override
  Widget build(BuildContext context) {

    PersistentTabController _controller;
    _controller = PersistentTabController(initialIndex: 2);

    return Scaffold(
      body: PersistentTabView(
        context,
        screens: _pages,
        controller: _controller,
        items: [
          PersistentBottomNavBarItem(
            icon: Icon(Icons.home),
            activeColorPrimary: Colors.orange,
            inactiveColorPrimary: Colors.white,
          ),
          PersistentBottomNavBarItem(
            icon: Icon(Icons.book_outlined),
            activeColorPrimary: Colors.orange,
            inactiveColorPrimary: Colors.white,
          ),
          PersistentBottomNavBarItem(
            icon: Icon(Icons.add),
            activeColorPrimary: Colors.orange,
            inactiveColorPrimary: Colors.white,
          ),
          PersistentBottomNavBarItem(
            icon: Icon(Icons.map),
            activeColorPrimary: Colors.orange,
            inactiveColorPrimary: Colors.white,
          ),
          PersistentBottomNavBarItem(
            icon: Icon(Icons.settings),
            activeColorPrimary: Colors.orange,
            inactiveColorPrimary: Colors.white,
          ),
        ],
        navBarStyle: NavBarStyle.style6,//表示スタイル
        backgroundColor: Colors.black54,//背景色
      ),
    );
  }
}










// class Home extends StatefulWidget {
//   @override
//   State<Home> createState() => HomeState();
// }
//
// class HomeState extends State<Home> {
//
//   int selectedIndex = 0;
//
//   List<Widget> bodyWidgetList = [
//     SafeArea( child: Top(), ),
//     SafeArea( child: Posting(), ),
//     SafeArea( child: Diary(), ),
//     SafeArea( child: Hint(), ),
//     SafeArea( child: Setting(), ),
//   ];
//
//
//   @override
//   Widget build(BuildContext context) {
//     return Scaffold(
//       backgroundColor: Color.fromARGB(110,60,95,150),
//       appBar:  AppBar(
//         title: Text(
//           'よりどころ',
//           style: TextStyle(color: Colors.black),
//         ),
//         backgroundColor: Colors.white,
//       ),
//       body: bodyWidgetList[selectedIndex],
//       bottomNavigationBar: BottomNavigationBar(
//           type: BottomNavigationBarType.fixed,
//           backgroundColor: Color.fromARGB(190, 255, 255, 240),
//           unselectedItemColor: Color.fromARGB(200, 0, 50, 125),
//           selectedItemColor: Color.fromARGB(175,125,125,125),
//           items: [
//             BottomNavigationBarItem(
//               icon: Icon(Icons.home),
//               label: "TOP",
//             ),
//             BottomNavigationBarItem(
//               icon: Icon(Icons.create),
//               label: "POST",
//             ),
//             BottomNavigationBarItem(
//               icon: Icon(Icons.book),
//               label: "DIARY",
//             ),
//             BottomNavigationBarItem(
//               icon: Icon(Icons.lightbulb),
//               label: "HINT",
//             ),
//             BottomNavigationBarItem(
//               icon: Icon(Icons.settings),
//               label: "SETTING",
//             ),
//           ],
//           currentIndex: selectedIndex,
//           onTap: (index) {
//             setState((){
//               selectedIndex = index;
//             });
//           }
//       ),
//     );
//   }
// }