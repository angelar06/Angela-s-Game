var GAME_LEVELS = [
      ["                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "   @                                                                            ",
   "  xx                                                                            ",
   "  x                                                          k                  ",
   "  x                                                     o                       ",
   "  x                           o        xxxxx               xxxxx                ",
   "  x                     xxx                    xxxxx    o                  o    ",
   "  x                          xxx                                                ",
   "  x                        o        xxx      o        xxxxx          xxxxxxxxxxx",
   "  x     xxx                         x x              xx   xx         x          ",
   "  x     x         xxxxx    o  e  xxxx x    xxxx      x     x         x          ",
   "  x     x         x   x          x    x!!!!x  x!!!!!!x     x!!!!!!!!!x          ",
   "  xxxxxxx    xxxxxx   xxxxxxxxxxxx    x!!!!x  x!!!!!!x     x!!!!!!!!!x          ",
   "        x!!!!x                        x!!!!x  x!!!!!!x     x!!!!!!!!!x          ",
   "        x!!!!x                        x!!!!x  x!!!!!!x     x!!!!!!!!!x          ",
   "        x!!!!x                        x!!!!x  x!!!!!!x     x!!!!!!!!!x          ",
   "        x!!!!x                        x!!!!x  x!!!!!!x     xxxxxxxxxxx          ",
   "        x!!!!x                        x!!!!x  x!!!!!!x                          ",
   "        x!!!!x                        x!!!!x  x!!!!!!x                          ",
   "        xxxxxx                        xxxxxx  xxxxxxxx                          ",
   "                                                                                ",
   "                                                                                "],  
  ["                                                                                                                  ",
   "                                                                                                                  ",
   " xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx ",
   " !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ",
   " xxxxxxxxxxxx!xxxxxxxxxxxxx!xxxxxxxxxxxxx!!!!!x!x!!!!!!!!xxxxx!xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx ",
   "            x!x    x!x    x!x           x!!!!!x!x!!!!!!!!x   x!x                             xxx            xxxxx ",
   "            x!x    x!x    x!x           x!!v!!xvxvvv!vvvvx   x!x                             xxx                x ",
   "            x!x    x!x    xvx           xvvxvvxxxxxxv        xvx               k             xxx     o          x ",
   "            x!x    xvx    x x                                                                xxx                x ",
   "            x!x           x x                                                                xxx     x          x ",
   "            xvx           x x                                                  xx                               x ",
   "                                                                               xx                            o  x ",
   "                                                                               xx                               x ",
   "                 o                                                             xx                        xxxxxxxx ",
   "                                          xxx     o                          xxxxxx                      xxxxxxxx ",
   "                  xxxx                                       xxx        o   xx!!!!xx  o      xxx   x     xxxxxxxx ",
   "                  xxxx      o         xx         xxx         xxx          xx!!!!!!!!xx       xxx      o  xxxxxxxx ",
   "           xxxx   xxxx                xx   o           xx    xxx     e   xx!!!!!!!!!!xx      xxx         xxxxxxxx ",
   "           xxxx   xxxx   xxxx     p   xx                     xxx        xx!!!!!!!!!!!!xx     xxx      xxxxxxxxxxx ",
   "           xxxx   xxxx   xxxx         xx          o    e     xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx!!!!!!!!xxxxxxxxx ",
   "     @     xxxx   xxxx   xxxx         xx                     xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx!!!!!!!!xxxxxxxxx ",
   "xxxxxxxxxxxxxxx   xxxx   xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx!!!!!!!!xxxxxxxxx ",
   "xxx!!!!!!!x!!!!!!!!!!!!!!!!!!!!!!!xx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ",
   "xxx!!!!!!!x!!!!!!!!!!!!!!!!!!!!!!!xx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ",
   "xxx!!!!!!!x!!!!!!!!!!!!!!!!!!!!!!!xx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x!x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ",
   "xxx!!!!!!!xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx!!!!!!!!!! ",
   "xxx!!!!!!!x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x!!!!!!!!!! ",
   "xxx!!!!!!!x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x!!!!!!!!!! ",
   "xxx!!!!!!!x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x!!!!!!!!!! ",
   "xxx!!!!!!!x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x!!!!!!!!!! "],  
  ["                                                                                                                             ",
   "                                                                                                                             ",
   "  x   @                                xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx   x                                                ",
   "  xxxxx                                x                                x   x                                                ",
   "      x        xx                      x   e                       o    x   x                                                ",
   "      x                                x                xx              x   x                                                ",
   "      x                                x  xxxxxxxxx  x     x           =x   x                                                ",
   "      x                                x       o x         xxxxxxxxxxxxxx   x                                                ",
   "      x                                x         x                      x   x                                                ",
   "      xxxxx          o                 xxxxxxxxxxxxxxxxx                x   x                                                ",
   "      x                                x                  x             x   x                                                ",
   "      x     xx    xxxx                 x             o        xxx       x   x                                                ",
   "      x                  xx            x                                x   x                                                ",
   "      x                                x           xxxxx                x   x                                                ",
   "      x        ||                      x        x    e                  x   x                                                ",
   "      x!!!!!!!!!!!!!!!!!!!x         xxxx   xxx             x   x!!!!!!!!x   x                                                ",
   "      xxxxxxxxxxxxxxxxxxxxx            x           xxxxxxxxx   xxxxxxxxxx   x                                                ",
   "      x                       xx       x      e                         x   x                                                ",
   "      xxx       o                      x          x                  xx x   x                                                ",
   "      x             xx                 xxxx    xxxxxxx     xx           x   x                                                ",
   "      x         xx         xx          x  xx   x     |                  x   x                                                ",
   "      x |                            o x  x o  x             xxxxx      x   x                                                ",
   "      xxxxx                     e  x   x  x    x                        x   x                                                ",
   "      x       xx  = xx     x       x   x  x   xx                        x   x                                                ",
   "      x       xxxxxxxxx    xxxxxxxxxxxxx  x    x     x         e        x   x                                                ",
   "      xxx   xxxxx                      x  x    x            x      x    x   x                                                ",
   "      x       o x                      x  xx   x    xx      xxxxxxxx    x   x                                                ",
   "      x  =            xxx     x!!!!!!!!x                                x   x                                                ",
   "      xxxx xxxxxx             xxxxxxxxxx                             x  x   x                                                ",
   "      xx      x    e                   x     xxxxxxxxxx                 x   x                                                ",
   "      xx      x            x           !                        xx      x   x                                                ",
   "      xx      xxxxxxxxxxxxxx           |       o                        x   x                                                ",
   "  x   xx      xxx                                          xxxxxxxxxx xxxxxxx                                                ",
   "  x   xx      xxx    o                 k    xxxxxxx    e   xx           x   x                                                ",
   "  x   xx  |   xxx                           xx!!!xx        xx        |  x   x                                                ",
   "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                                                ",
   "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                                                ",
   "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                                               "],
  /*                                                                                                  xxx x       ",
   "                                                                                                      x       ",
   "                                                                                                  xxxxx       ",
   "                                                                                                  x           ",
   "                                                                                                  x xxx       ",
   "                          o                                                                       x x x       ",
   "                                                                                             o o oxxx x       ",
   "                   xxx                                                                                x       ",
   "       !  o  !                                                xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx       ",
   "       x     x                                                x   x x   x x   x x   x x   x x   x x           ",
   "       x= o  x            x                                   xxx x xxx x xxx x xxx x xxx x xxx x xxxxx       ",
   "       x     x                                                  x x   x x   x x   x x   x x   x x     x       ",
   "       !  o  !            o                                  xxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxxxx       ",
   "                                                                                                              ",
   "          o              xxx                              xx                                                  ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                      xx                                                      ",
   "                   xxx         xxx                                                                            ",
   "                                                                                                              ",
   "                          o                                                     x      x                      ",
   "                                                          xx     xx                                           ",
   "             xxx         xxx         xxx                                 x                  x                 ",
   "                                                                                                              ",
   "                                                                 ||                                           ",
   "  xxxxxxxxxxx                                                                                                 ",
   "  x         x o xxxxxxxxx o xxxxxxxxx o xx                                                x                   ",
   "  x         x   x       x   x       x   x                 ||                  x     x                         ",
   "  x  @      xxxxx   o   xxxxx   o   xxxxx                                                                     ",
   "  xxxxxxx                                     xxxxx       xx     xx     xxx                                   ",
   "        x=                  =                =x   x                     xxx                                   ",
   "        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx   x!!!!!!!!!!!!!!!!!!!!!xxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "                                                  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "                                                                                                              "]*/
];

if (typeof module != "undefined" && module.exports)
  module.exports = GAME_LEVELS;
