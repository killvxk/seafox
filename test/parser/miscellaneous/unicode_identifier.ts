import { pass } from '../core';
import { Context } from '../../../src/parser/common';

pass('Miscellaneous - Unicode identifier (pass)', [
  [
    `var a℘; // U+2118`,
    Context.OptionsLoc,
    {
      type: 'Program',
      sourceType: 'script',
      body: [
        {
          type: 'VariableDeclaration',
          kind: 'var',
          declarations: [
            {
              type: 'VariableDeclarator',
              init: null,
              id: {
                type: 'Identifier',
                name: 'a℘',
                start: 4,
                end: 6,
                loc: {
                  start: {
                    line: 1,
                    column: 4
                  },
                  end: {
                    line: 1,
                    column: 6
                  }
                }
              },
              start: 4,
              end: 6,
              loc: {
                start: {
                  line: 1,
                  column: 4
                },
                end: {
                  line: 1,
                  column: 6
                }
              }
            }
          ],
          start: 0,
          end: 7,
          loc: {
            start: {
              line: 1,
              column: 0
            },
            end: {
              line: 1,
              column: 7
            }
          }
        }
      ],
      start: 0,
      end: 17,
      loc: {
        start: {
          line: 1,
          column: 0
        },
        end: {
          line: 1,
          column: 17
        }
      }
    }
  ],
  [
    `a፩; // U+1369`,
    Context.OptionsLoc,
    {
      type: 'Program',
      sourceType: 'script',
      body: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'Identifier',
            name: 'a፩',
            start: 0,
            end: 2,
            loc: {
              start: {
                line: 1,
                column: 0
              },
              end: {
                line: 1,
                column: 2
              }
            }
          },
          start: 0,
          end: 3,
          loc: {
            start: {
              line: 1,
              column: 0
            },
            end: {
              line: 1,
              column: 3
            }
          }
        }
      ],
      start: 0,
      end: 13,
      loc: {
        start: {
          line: 1,
          column: 0
        },
        end: {
          line: 1,
          column: 13
        }
      }
    }
  ],
  [
    `var a፱; // U+1371`,
    Context.OptionsLoc,
    {
      type: 'Program',
      sourceType: 'script',
      body: [
        {
          type: 'VariableDeclaration',
          kind: 'var',
          declarations: [
            {
              type: 'VariableDeclarator',
              init: null,
              id: {
                type: 'Identifier',
                name: 'a፱',
                start: 4,
                end: 6,
                loc: {
                  start: {
                    line: 1,
                    column: 4
                  },
                  end: {
                    line: 1,
                    column: 6
                  }
                }
              },
              start: 4,
              end: 6,
              loc: {
                start: {
                  line: 1,
                  column: 4
                },
                end: {
                  line: 1,
                  column: 6
                }
              }
            }
          ],
          start: 0,
          end: 7,
          loc: {
            start: {
              line: 1,
              column: 0
            },
            end: {
              line: 1,
              column: 7
            }
          }
        }
      ],
      start: 0,
      end: 17,
      loc: {
        start: {
          line: 1,
          column: 0
        },
        end: {
          line: 1,
          column: 17
        }
      }
    }
  ],
  [
    `var a·; // U+0387`,
    Context.OptionsLoc,
    {
      type: 'Program',
      sourceType: 'script',
      body: [
        {
          type: 'VariableDeclaration',
          kind: 'var',
          declarations: [
            {
              type: 'VariableDeclarator',
              init: null,
              id: {
                type: 'Identifier',
                name: 'a·',
                start: 4,
                end: 6,
                loc: {
                  start: {
                    line: 1,
                    column: 4
                  },
                  end: {
                    line: 1,
                    column: 6
                  }
                }
              },
              start: 4,
              end: 6,
              loc: {
                start: {
                  line: 1,
                  column: 4
                },
                end: {
                  line: 1,
                  column: 6
                }
              }
            }
          ],
          start: 0,
          end: 7,
          loc: {
            start: {
              line: 1,
              column: 0
            },
            end: {
              line: 1,
              column: 7
            }
          }
        }
      ],
      start: 0,
      end: 17,
      loc: {
        start: {
          line: 1,
          column: 0
        },
        end: {
          line: 1,
          column: 17
        }
      }
    }
  ],
  [
    `var \\u2118;`,
    Context.OptionsLoc,
    {
      type: 'Program',
      sourceType: 'script',
      body: [
        {
          type: 'VariableDeclaration',
          kind: 'var',
          declarations: [
            {
              type: 'VariableDeclarator',
              init: null,
              id: {
                type: 'Identifier',
                name: '℘',
                start: 4,
                end: 10,
                loc: {
                  start: {
                    line: 1,
                    column: 4
                  },
                  end: {
                    line: 1,
                    column: 10
                  }
                }
              },
              start: 4,
              end: 10,
              loc: {
                start: {
                  line: 1,
                  column: 4
                },
                end: {
                  line: 1,
                  column: 10
                }
              }
            }
          ],
          start: 0,
          end: 11,
          loc: {
            start: {
              line: 1,
              column: 0
            },
            end: {
              line: 1,
              column: 11
            }
          }
        }
      ],
      start: 0,
      end: 11,
      loc: {
        start: {
          line: 1,
          column: 0
        },
        end: {
          line: 1,
          column: 11
        }
      }
    }
  ],
  [
    `var _߽࣓৾ఄꣿ𐴤𐴥𐴦𐴧𐴰𐴱𐴲𐴳𐴴𐴵𐴶𐴷𐴸𐴹𐽆𐽇𐽋𐽍𐽎𐽏𐽐𐽈𐽉𐽊𐽌𑅅𑅆𑇉𑌻𑑞𑠬𑠭𑠮𑠯𑠰𑠱𑠲𑠳𑠴𑠵𑠶𑠷𑠸𑠺𑠹𑶊𑶋𑶌𑶍𑶎𑶐𑶑𑶓𑶔𑶕𑶖𑶗𑶠𑶡𑶢𑶣𑶤𑶥𑶦𑶧𑶨𑶩𑻳𑻴𑻵𑻶;`,
    Context.OptionsLoc,
    {
      type: 'Program',
      sourceType: 'script',
      body: [
        {
          type: 'VariableDeclaration',
          kind: 'var',
          declarations: [
            {
              type: 'VariableDeclarator',
              init: null,
              id: {
                type: 'Identifier',
                name: '_߽࣓৾ఄꣿ𐴤𐴥𐴦𐴧𐴰𐴱𐴲𐴳𐴴𐴵𐴶𐴷𐴸𐴹𐽆𐽇𐽋𐽍𐽎𐽏𐽐𐽈𐽉𐽊𐽌𑅅𑅆𑇉𑌻𑑞𑠬𑠭𑠮𑠯𑠰𑠱𑠲𑠳𑠴𑠵𑠶𑠷𑠸𑠺𑠹𑶊𑶋𑶌𑶍𑶎𑶐𑶑𑶓𑶔𑶕𑶖𑶗𑶠𑶡𑶢𑶣𑶤𑶥𑶦𑶧𑶨𑶩𑻳𑻴𑻵𑻶',
                start: 4,
                end: 152,
                loc: {
                  start: {
                    line: 1,
                    column: 4
                  },
                  end: {
                    line: 1,
                    column: 152
                  }
                }
              },
              start: 4,
              end: 152,
              loc: {
                start: {
                  line: 1,
                  column: 4
                },
                end: {
                  line: 1,
                  column: 152
                }
              }
            }
          ],
          start: 0,
          end: 153,
          loc: {
            start: {
              line: 1,
              column: 0
            },
            end: {
              line: 1,
              column: 153
            }
          }
        }
      ],
      start: 0,
      end: 153,
      loc: {
        start: {
          line: 1,
          column: 0
        },
        end: {
          line: 1,
          column: 153
        }
      }
    }
  ],
  [
    `var _ૺૻૼ૽૾૿ഀ഻഼᳷᷹᷷᷸᷶𑨁𑨂𑨃𑨄𑨅𑨆𑨇𑨈𑨉𑨊𑨳𑨴𑨵𑨶𑨷𑨸𑨹𑨻𑨼𑨽𑨾𑩇𑩑𑩒𑩓𑩔𑩕𑩖𑩗𑩘𑩙𑩚𑩛𑪊𑪋𑪌𑪍𑪎𑪏𑪐𑪑𑪒𑪓𑪔𑪕𑪖𑪗𑪘𑪙𑴱𑴲𑴳𑴴𑴵𑴶𑴺𑴼𑴽𑴿𑵀𑵁𑵂𑵃𑵄𑵅𑵇𑵐𑵑𑵒𑵓𑵔𑵕𑵖𑵗𑵘𑵙;`,
    Context.OptionsLoc,
    {
      type: 'Program',
      sourceType: 'script',
      body: [
        {
          type: 'VariableDeclaration',
          kind: 'var',
          declarations: [
            {
              type: 'VariableDeclarator',
              init: null,
              id: {
                type: 'Identifier',
                name: '_ૺૻૼ૽૾૿ഀ഻഼᳷᷹᷷᷸᷶𑨁𑨂𑨃𑨄𑨅𑨆𑨇𑨈𑨉𑨊𑨳𑨴𑨵𑨶𑨷𑨸𑨹𑨻𑨼𑨽𑨾𑩇𑩑𑩒𑩓𑩔𑩕𑩖𑩗𑩘𑩙𑩚𑩛𑪊𑪋𑪌𑪍𑪎𑪏𑪐𑪑𑪒𑪓𑪔𑪕𑪖𑪗𑪘𑪙𑴱𑴲𑴳𑴴𑴵𑴶𑴺𑴼𑴽𑴿𑵀𑵁𑵂𑵃𑵄𑵅𑵇𑵐𑵑𑵒𑵓𑵔𑵕𑵖𑵗𑵘𑵙',
                start: 4,
                end: 171,
                loc: {
                  start: {
                    line: 1,
                    column: 4
                  },
                  end: {
                    line: 1,
                    column: 171
                  }
                }
              },
              start: 4,
              end: 171,
              loc: {
                start: {
                  line: 1,
                  column: 4
                },
                end: {
                  line: 1,
                  column: 171
                }
              }
            }
          ],
          start: 0,
          end: 172,
          loc: {
            start: {
              line: 1,
              column: 0
            },
            end: {
              line: 1,
              column: 172
            }
          }
        }
      ],
      start: 0,
      end: 172,
      loc: {
        start: {
          line: 1,
          column: 0
        },
        end: {
          line: 1,
          column: 172
        }
      }
    }
  ],
  [
    `var _\\u0B55\\u0D81\\u1ABF\\u1AC0\\uA82C\\u{10EAB}\\u{10EAC}\\u{111CE}\\u{111CF}\\u{11930}\\u{11931}\\u{11932}\\u{11933}\\u{11934}\\u{11935}\\u{11937}\\u{11938}\\u{1193B}\\u{1193C}\\u{1193D}\\u{1193E}\\u{11940}\\u{11942}\\u{11943}\\u{11950}\\u{11951}\\u{11952}\\u{11953}\\u{11954}`,
    Context.OptionsLoc,
    {
      type: 'Program',
      sourceType: 'script',
      body: [
        {
          type: 'VariableDeclaration',
          kind: 'var',
          declarations: [
            {
              type: 'VariableDeclarator',
              init: null,
              id: {
                type: 'Identifier',
                name: '_୕ඁ꠬ᪿᫀCʫCʬDǎDǏFİFıFĲFĳFĴFĵFķFĸFĻFļFĽFľFŀFłFŃFŐFőFŒFœFŔ',
                start: 4,
                end: 251,
                loc: {
                  start: {
                    line: 1,
                    column: 4
                  },
                  end: {
                    line: 1,
                    column: 251
                  }
                }
              },
              start: 4,
              end: 251,
              loc: {
                start: {
                  line: 1,
                  column: 4
                },
                end: {
                  line: 1,
                  column: 251
                }
              }
            }
          ],
          start: 0,
          end: 251,
          loc: {
            start: {
              line: 1,
              column: 0
            },
            end: {
              line: 1,
              column: 251
            }
          }
        }
      ],
      start: 0,
      end: 251,
      loc: {
        start: {
          line: 1,
          column: 0
        },
        end: {
          line: 1,
          column: 251
        }
      }
    }
  ],
  [
    `var _ٟ࡙࡚࡛ऺऻॏॖॗྍྎྏ᯦፝፞ᯧᯨᯩᯪᯫᯬᯭᯮᯯᯰᯱ᯲᯳⵿᷼𑀀𑀁𑀂𑀸𑀹𑀺𑀻𑀼𑀽𑀾𑀿𑁀𑁁𑁂𑁃𑁄𑁅𑁆𑁦𑁧𑁨𑁩𑁪𑁫𑁬𑁭𑁮𑁯;`,
    Context.OptionsLoc,
    {
      type: 'Program',
      sourceType: 'script',
      body: [
        {
          type: 'VariableDeclaration',
          kind: 'var',
          declarations: [
            {
              type: 'VariableDeclarator',
              init: null,
              id: {
                type: 'Identifier',
                name: '_ٟ࡙࡚࡛ऺऻॏॖॗྍྎྏ᯦፝፞ᯧᯨᯩᯪᯫᯬᯭᯮᯯᯰᯱ᯲᯳⵿᷼𑀀𑀁𑀂𑀸𑀹𑀺𑀻𑀼𑀽𑀾𑀿𑁀𑁁𑁂𑁃𑁄𑁅𑁆𑁦𑁧𑁨𑁩𑁪𑁫𑁬𑁭𑁮𑁯',
                start: 4,
                end: 91,
                loc: {
                  start: {
                    line: 1,
                    column: 4
                  },
                  end: {
                    line: 1,
                    column: 91
                  }
                }
              },
              start: 4,
              end: 91,
              loc: {
                start: {
                  line: 1,
                  column: 4
                },
                end: {
                  line: 1,
                  column: 91
                }
              }
            }
          ],
          start: 0,
          end: 92,
          loc: {
            start: {
              line: 1,
              column: 0
            },
            end: {
              line: 1,
              column: 92
            }
          }
        }
      ],
      start: 0,
      end: 92,
      loc: {
        start: {
          line: 1,
          column: 0
        },
        end: {
          line: 1,
          column: 92
        }
      }
    }
  ],
  [
    `var _ࣔࣕࣖࣗࣘࣙࣚࣛࣜࣝࣞࣟ࣠࣡᷻ꣅ𑈾𑐵𑐶𑐷𑐸𑐹𑐺𑐻𑐼𑐽𑐾𑐿𑑀𑑁𑑂𑑃𑑄𑑅𑑆𑑐𑑑𑑒𑑓𑑔𑑕𑑖𑑗𑑘𑑙𑰯𑰰𑰱𑰲𑰳𑰴𑰵𑰶𑰸𑰹𑰺𑰻𑰼𑰽𑰾𑰿𑱐𑱑𑱒𑱓𑱔𑱕𑱖𑱗𑱘𑱙𑲒𑲓𑲔𑲕𑲖𑲗𑲘𑲙𑲚𑲛𑲜𑲝𑲞𑲟𑲠𑲡𑲢𑲣𑲤𑲥𑲦𑲧𑲩𑲪𑲫𑲬𑲭𑲮𑲯𑲰𑲱𑲲𑲳𑲴𑲵𑲶𞥊𞀀𞀁𞀂𞀃𞀄𞀅𞀆𞀈𞀉𞀊𞀋𞀌𞀍𞀎𞀏𞀐𞀑𞀒𞀓𞀔𞀕𞀖𞀗𞀘𞀛𞀜𞀝𞀞𞀟𞀠𞀡𞀣𞀤𞀦𞀧𞀨𞀩𞀪𞥄𞥅𞥆𞥇𞥈𞥉𞥐𞥑𞥒𞥓𞥔𞥕𞥖𞥗𞥘𞥙;`,
    Context.OptionsLoc,
    {
      type: 'Program',
      sourceType: 'script',
      body: [
        {
          type: 'VariableDeclaration',
          kind: 'var',
          declarations: [
            {
              type: 'VariableDeclarator',
              init: null,
              id: {
                type: 'Identifier',
                name:
                  '_ࣔࣕࣖࣗࣘࣙࣚࣛࣜࣝࣞࣟ࣠࣡᷻ꣅ𑈾𑐵𑐶𑐷𑐸𑐹𑐺𑐻𑐼𑐽𑐾𑐿𑑀𑑁𑑂𑑃𑑄𑑅𑑆𑑐𑑑𑑒𑑓𑑔𑑕𑑖𑑗𑑘𑑙𑰯𑰰𑰱𑰲𑰳𑰴𑰵𑰶𑰸𑰹𑰺𑰻𑰼𑰽𑰾𑰿𑱐𑱑𑱒𑱓𑱔𑱕𑱖𑱗𑱘𑱙𑲒𑲓𑲔𑲕𑲖𑲗𑲘𑲙𑲚𑲛𑲜𑲝𑲞𑲟𑲠𑲡𑲢𑲣𑲤𑲥𑲦𑲧𑲩𑲪𑲫𑲬𑲭𑲮𑲯𑲰𑲱𑲲𑲳𑲴𑲵𑲶𞥊𞀀𞀁𞀂𞀃𞀄𞀅𞀆𞀈𞀉𞀊𞀋𞀌𞀍𞀎𞀏𞀐𞀑𞀒𞀓𞀔𞀕𞀖𞀗𞀘𞀛𞀜𞀝𞀞𞀟𞀠𞀡𞀣𞀤𞀦𞀧𞀨𞀩𞀪𞥄𞥅𞥆𞥇𞥈𞥉𞥐𞥑𞥒𞥓𞥔𞥕𞥖𞥗𞥘𞥙',
                start: 4,
                end: 313,
                loc: {
                  start: {
                    line: 1,
                    column: 4
                  },
                  end: {
                    line: 1,
                    column: 313
                  }
                }
              },
              start: 4,
              end: 313,
              loc: {
                start: {
                  line: 1,
                  column: 4
                },
                end: {
                  line: 1,
                  column: 313
                }
              }
            }
          ],
          start: 0,
          end: 314,
          loc: {
            start: {
              line: 1,
              column: 0
            },
            end: {
              line: 1,
              column: 314
            }
          }
        }
      ],
      start: 0,
      end: 314,
      loc: {
        start: {
          line: 1,
          column: 0
        },
        end: {
          line: 1,
          column: 314
        }
      }
    }
  ],
  [
    `var _$ = 3;`,
    Context.OptionsLoc,
    {
      type: 'Program',
      sourceType: 'script',
      body: [
        {
          type: 'VariableDeclaration',
          kind: 'var',
          declarations: [
            {
              type: 'VariableDeclarator',
              init: {
                type: 'Literal',
                value: 3,
                start: 9,
                end: 10,
                loc: {
                  start: {
                    line: 1,
                    column: 9
                  },
                  end: {
                    line: 1,
                    column: 10
                  }
                }
              },
              id: {
                type: 'Identifier',
                name: '_$',
                start: 4,
                end: 6,
                loc: {
                  start: {
                    line: 1,
                    column: 4
                  },
                  end: {
                    line: 1,
                    column: 6
                  }
                }
              },
              start: 4,
              end: 10,
              loc: {
                start: {
                  line: 1,
                  column: 4
                },
                end: {
                  line: 1,
                  column: 10
                }
              }
            }
          ],
          start: 0,
          end: 11,
          loc: {
            start: {
              line: 1,
              column: 0
            },
            end: {
              line: 1,
              column: 11
            }
          }
        }
      ],
      start: 0,
      end: 11,
      loc: {
        start: {
          line: 1,
          column: 0
        },
        end: {
          line: 1,
          column: 11
        }
      }
    }
  ],
  [
    `var ԦԧؠࡀࡁࡂࡃࡄࡅࡆࡇࡈࡉࡊࡋࡌࡍࡎࡏࡐࡑࡒࡓࡔࡕࡖࡗࡘॳॴॵॶॷೱೲഩഺൎྌᯀᯁᯂᯃᯄᯅᯆᯇᯈᯉᯊᯋᯌᯍᯎᯏᯐᯑᯒᯓᯔᯕᯖᯗᯘᯙᯚᯛᯜᯝᯞᯟᯠᯡᯢᯣᯤᯥₕₖₗₘₙₚₛₜㆸㆹㆺꙠꙡꞍꞎꞐꞑꞠꞡꞢꞣꞤꞥꞦꞧꞨꞩꟺꬁꬂꬃꬄꬅꬆꬉꬊꬋꬌꬍꬎꬑꬒꬓꬔꬕꬖꬠꬡꬢꬣꬤꬥꬦꬨꬩꬪꬫꬬꬭꬮ𑀃𑀄𑀅𑀆𑀇𑀈𑀉𑀊𑀋𑀌𑀍𑀎𑀏𑀐𑀑𑀒𑀓𑀔𑀕𑀖𑀗𑀘𑀙𑀚𑀛𑀜𑀝𑀞𑀟𑀠𑀡𑀢𑀣𑀤𑀥𑀦𑀧𑀨𑀩𑀪𑀫𑀬𑀭𑀮𑀯𑀰𑀱𑀲𑀳𑀴𑀵𑀶𑀷𖠀𖠁𖠂𖠃𖠄𖠅𖠆𖠇𖠈𖠉𖠊𖠋𖠌𖠍𖠎𖠏𖠐𖠑𖠒𖠓𖠔𖠕𖠖𖠗𖠘𖠙𖠚𖠛𖠜𖠝𖠞𖠟𖠠𖠡𖠢𖠣𖠤𖠥𖠦𖠧𖠨𖠩𖠪𖠫𖠬𖠭𖠮𖠯𖠰𖠱𖠲𖠳𖠴𖠵𖠶𖠷𖠸𖠹𖠺𖠻𖠼𖠽𖠾𖠿𖡀𖡁𖡂𖡃𖡄𖡅𖡆𖡇𖡈𖡉𖡊𖡋𖡌𖡍𖡎𖡏𖡐𖡑𖡒𖡓𖡔𖡕𖡖𖡗𖡘𖡙𖡚𖡛𖡜𖡝𖡞𖡟𖡠𖡡𖡢𖡣𖡤𖡥𖡦𖡧𖡨𖡩𖡪𖡫𖡬𖡭𖡮𖡯𖡰𖡱𖡲𖡳𖡴𖡵𖡶𖡷𖡸𖡹𖡺𖡻𖡼𖡽𖡾𖡿𖢀𖢁𖢂𖢃𖢄𖢅𖢆𖢇𖢈𖢉𖢊𖢋𖢌𖢍𖢎𖢏𖢐𖢑𖢒𖢓𖢔𖢕𖢖𖢗𖢘𖢙𖢚𖢛𖢜𖢝𖢞𖢟𖢠𖢡𖢢𖢣𖢤𖢥𖢦𖢧𖢨𖢩𖢪𖢫𖢬𖢭𖢮𖢯𖢰𖢱𖢲𖢳𖢴𖢵𖢶𖢷𖢸𖢹𖢺𖢻𖢼𖢽𖢾𖢿𖣀𖣁𖣂𖣃𖣄𖣅𖣆𖣇𖣈𖣉𖣊𖣋𖣌𖣍𖣎𖣏𖣐𖣑𖣒𖣓𖣔𖣕𖣖𖣗𖣘𖣙𖣚𖣛𖣜𖣝𖣞𖣟𖣠𖣡𖣢𖣣𖣤𖣥𖣦𖣧𖣨𖣩𖣪𖣫𖣬𖣭𖣮𖣯𖣰𖣱𖣲𖣳𖣴𖣵𖣶𖣷𖣸𖣹𖣺𖣻𖣼𖣽𖣾𖣿𖤀𖤁𖤂𖤃𖤄𖤅𖤆𖤇𖤈𖤉𖤊𖤋𖤌𖤍𖤎𖤏𖤐𖤑𖤒𖤓𖤔𖤕𖤖𖤗𖤘𖤙𖤚𖤛𖤜𖤝𖤞𖤟𖤠𖤡𖤢𖤣𖤤𖤥𖤦𖤧𖤨𖤩𖤪𖤫𖤬𖤭𖤮𖤯𖤰𖤱𖤲𖤳𖤴𖤵𖤶𖤷𖤸𖤹𖤺𖤻𖤼𖤽𖤾𖤿𖥀𖥁𖥂𖥃𖥄𖥅𖥆𖥇𖥈𖥉𖥊𖥋𖥌𖥍𖥎𖥏𖥐𖥑𖥒𖥓𖥔𖥕𖥖𖥗𖥘𖥙𖥚𖥛𖥜𖥝𖥞𖥟𖥠𖥡𖥢𖥣𖥤𖥥𖥦𖥧𖥨𖥩𖥪𖥫𖥬𖥭𖥮𖥯𖥰𖥱𖥲𖥳𖥴𖥵𖥶𖥷𖥸𖥹𖥺𖥻𖥼𖥽𖥾𖥿𖦀𖦁𖦂𖦃𖦄𖦅𖦆𖦇𖦈𖦉𖦊𖦋𖦌𖦍𖦎𖦏𖦐𖦑𖦒𖦓𖦔𖦕𖦖𖦗𖦘𖦙𖦚𖦛𖦜𖦝𖦞𖦟𖦠𖦡𖦢𖦣𖦤𖦥𖦦𖦧𖦨𖦩𖦪𖦫𖦬𖦭𖦮𖦯𖦰𖦱𖦲𖦳𖦴𖦵𖦶𖦷𖦸𖦹𖦺𖦻𖦼𖦽𖦾𖦿𖧀𖧁𖧂𖧃𖧄𖧅𖧆𖧇𖧈𖧉𖧊𖧋𖧌𖧍𖧎𖧏𖧐𖧑𖧒𖧓𖧔𖧕𖧖𖧗𖧘𖧙𖧚𖧛𖧜𖧝𖧞𖧟𖧠𖧡𖧢𖧣𖧤𖧥𖧦𖧧𖧨𖧩𖧪𖧫𖧬𖧭𖧮𖧯𖧰𖧱𖧲𖧳𖧴𖧵𖧶𖧷𖧸𖧹𖧺𖧻𖧼𖧽𖧾𖧿𖨀𖨁𖨂𖨃𖨄𖨅𖨆𖨇𖨈𖨉𖨊𖨋𖨌𖨍𖨎𖨏𖨐𖨑𖨒𖨓𖨔𖨕𖨖𖨗𖨘𖨙𖨚𖨛𖨜𖨝𖨞𖨟𖨠𖨡𖨢𖨣𖨤𖨥𖨦𖨧𖨨𖨩𖨪𖨫𖨬𖨭𖨮𖨯𖨰𖨱𖨲𖨳𖨴𖨵𖨶𖨷𖨸𛀀𛀁𫝀𫝁𫝂𫝃𫝄𫝅𫝆𫝇𫝈𫝉𫝊𫝋𫝌𫝍𫝎𫝏𫝐𫝑𫝒𫝓𫝔𫝕𫝖𫝗𫝘𫝙𫝚𫝛𫝜𫝝𫝞𫝟𫝠𫝡𫝢𫝣𫝤𫝥𫝦𫝧𫝨𫝩𫝪𫝫𫝬𫝭𫝮𫝯𫝰𫝱𫝲𫝳𫝴𫝵𫝶𫝷𫝸𫝹𫝺𫝻𫝼𫝽𫝾𫝿𫞀𫞁𫞂𫞃𫞄𫞅𫞆𫞇𫞈𫞉𫞊𫞋𫞌𫞍𫞎𫞏𫞐𫞑𫞒𫞓𫞔𫞕𫞖𫞗𫞘𫞙𫞚𫞛𫞜𫞝𫞞𫞟𫞠𫞡𫞢𫞣𫞤𫞥𫞦𫞧𫞨𫞩𫞪𫞫𫞬𫞭𫞮𫞯𫞰𫞱𫞲𫞳𫞴𫞵𫞶𫞷𫞸𫞹𫞺𫞻𫞼𫞽𫞾𫞿𫟀𫟁𫟂𫟃𫟄𫟅𫟆𫟇𫟈𫟉𫟊𫟋𫟌𫟍𫟎𫟏𫟐𫟑𫟒𫟓𫟔𫟕𫟖𫟗𫟘𫟙𫟚𫟛𫟜𫟝𫟞𫟟𫟠𫟡𫟢𫟣𫟤𫟥𫟦𫟧𫟨𫟩𫟪𫟫𫟬𫟭𫟮𫟯𫟰𫟱𫟲𫟳𫟴𫟵𫟶𫟷𫟸𫟹𫟺𫟻𫟼𫟽𫟾𫟿𫠀𫠁𫠂𫠃𫠄𫠅𫠆𫠇𫠈𫠉𫠊𫠋𫠌𫠍𫠎𫠏𫠐𫠑𫠒𫠓𫠔𫠕𫠖𫠗𫠘𫠙𫠚𫠛𫠜𫠝;`,
    Context.OptionsLoc,
    {
      type: 'Program',
      sourceType: 'script',
      body: [
        {
          type: 'VariableDeclaration',
          kind: 'var',
          declarations: [
            {
              type: 'VariableDeclarator',
              init: null,
              id: {
                type: 'Identifier',
                name:
                  'ԦԧؠࡀࡁࡂࡃࡄࡅࡆࡇࡈࡉࡊࡋࡌࡍࡎࡏࡐࡑࡒࡓࡔࡕࡖࡗࡘॳॴॵॶॷೱೲഩഺൎྌᯀᯁᯂᯃᯄᯅᯆᯇᯈᯉᯊᯋᯌᯍᯎᯏᯐᯑᯒᯓᯔᯕᯖᯗᯘᯙᯚᯛᯜᯝᯞᯟᯠᯡᯢᯣᯤᯥₕₖₗₘₙₚₛₜㆸㆹㆺꙠꙡꞍꞎꞐꞑꞠꞡꞢꞣꞤꞥꞦꞧꞨꞩꟺꬁꬂꬃꬄꬅꬆꬉꬊꬋꬌꬍꬎꬑꬒꬓꬔꬕꬖꬠꬡꬢꬣꬤꬥꬦꬨꬩꬪꬫꬬꬭꬮ𑀃𑀄𑀅𑀆𑀇𑀈𑀉𑀊𑀋𑀌𑀍𑀎𑀏𑀐𑀑𑀒𑀓𑀔𑀕𑀖𑀗𑀘𑀙𑀚𑀛𑀜𑀝𑀞𑀟𑀠𑀡𑀢𑀣𑀤𑀥𑀦𑀧𑀨𑀩𑀪𑀫𑀬𑀭𑀮𑀯𑀰𑀱𑀲𑀳𑀴𑀵𑀶𑀷𖠀𖠁𖠂𖠃𖠄𖠅𖠆𖠇𖠈𖠉𖠊𖠋𖠌𖠍𖠎𖠏𖠐𖠑𖠒𖠓𖠔𖠕𖠖𖠗𖠘𖠙𖠚𖠛𖠜𖠝𖠞𖠟𖠠𖠡𖠢𖠣𖠤𖠥𖠦𖠧𖠨𖠩𖠪𖠫𖠬𖠭𖠮𖠯𖠰𖠱𖠲𖠳𖠴𖠵𖠶𖠷𖠸𖠹𖠺𖠻𖠼𖠽𖠾𖠿𖡀𖡁𖡂𖡃𖡄𖡅𖡆𖡇𖡈𖡉𖡊𖡋𖡌𖡍𖡎𖡏𖡐𖡑𖡒𖡓𖡔𖡕𖡖𖡗𖡘𖡙𖡚𖡛𖡜𖡝𖡞𖡟𖡠𖡡𖡢𖡣𖡤𖡥𖡦𖡧𖡨𖡩𖡪𖡫𖡬𖡭𖡮𖡯𖡰𖡱𖡲𖡳𖡴𖡵𖡶𖡷𖡸𖡹𖡺𖡻𖡼𖡽𖡾𖡿𖢀𖢁𖢂𖢃𖢄𖢅𖢆𖢇𖢈𖢉𖢊𖢋𖢌𖢍𖢎𖢏𖢐𖢑𖢒𖢓𖢔𖢕𖢖𖢗𖢘𖢙𖢚𖢛𖢜𖢝𖢞𖢟𖢠𖢡𖢢𖢣𖢤𖢥𖢦𖢧𖢨𖢩𖢪𖢫𖢬𖢭𖢮𖢯𖢰𖢱𖢲𖢳𖢴𖢵𖢶𖢷𖢸𖢹𖢺𖢻𖢼𖢽𖢾𖢿𖣀𖣁𖣂𖣃𖣄𖣅𖣆𖣇𖣈𖣉𖣊𖣋𖣌𖣍𖣎𖣏𖣐𖣑𖣒𖣓𖣔𖣕𖣖𖣗𖣘𖣙𖣚𖣛𖣜𖣝𖣞𖣟𖣠𖣡𖣢𖣣𖣤𖣥𖣦𖣧𖣨𖣩𖣪𖣫𖣬𖣭𖣮𖣯𖣰𖣱𖣲𖣳𖣴𖣵𖣶𖣷𖣸𖣹𖣺𖣻𖣼𖣽𖣾𖣿𖤀𖤁𖤂𖤃𖤄𖤅𖤆𖤇𖤈𖤉𖤊𖤋𖤌𖤍𖤎𖤏𖤐𖤑𖤒𖤓𖤔𖤕𖤖𖤗𖤘𖤙𖤚𖤛𖤜𖤝𖤞𖤟𖤠𖤡𖤢𖤣𖤤𖤥𖤦𖤧𖤨𖤩𖤪𖤫𖤬𖤭𖤮𖤯𖤰𖤱𖤲𖤳𖤴𖤵𖤶𖤷𖤸𖤹𖤺𖤻𖤼𖤽𖤾𖤿𖥀𖥁𖥂𖥃𖥄𖥅𖥆𖥇𖥈𖥉𖥊𖥋𖥌𖥍𖥎𖥏𖥐𖥑𖥒𖥓𖥔𖥕𖥖𖥗𖥘𖥙𖥚𖥛𖥜𖥝𖥞𖥟𖥠𖥡𖥢𖥣𖥤𖥥𖥦𖥧𖥨𖥩𖥪𖥫𖥬𖥭𖥮𖥯𖥰𖥱𖥲𖥳𖥴𖥵𖥶𖥷𖥸𖥹𖥺𖥻𖥼𖥽𖥾𖥿𖦀𖦁𖦂𖦃𖦄𖦅𖦆𖦇𖦈𖦉𖦊𖦋𖦌𖦍𖦎𖦏𖦐𖦑𖦒𖦓𖦔𖦕𖦖𖦗𖦘𖦙𖦚𖦛𖦜𖦝𖦞𖦟𖦠𖦡𖦢𖦣𖦤𖦥𖦦𖦧𖦨𖦩𖦪𖦫𖦬𖦭𖦮𖦯𖦰𖦱𖦲𖦳𖦴𖦵𖦶𖦷𖦸𖦹𖦺𖦻𖦼𖦽𖦾𖦿𖧀𖧁𖧂𖧃𖧄𖧅𖧆𖧇𖧈𖧉𖧊𖧋𖧌𖧍𖧎𖧏𖧐𖧑𖧒𖧓𖧔𖧕𖧖𖧗𖧘𖧙𖧚𖧛𖧜𖧝𖧞𖧟𖧠𖧡𖧢𖧣𖧤𖧥𖧦𖧧𖧨𖧩𖧪𖧫𖧬𖧭𖧮𖧯𖧰𖧱𖧲𖧳𖧴𖧵𖧶𖧷𖧸𖧹𖧺𖧻𖧼𖧽𖧾𖧿𖨀𖨁𖨂𖨃𖨄𖨅𖨆𖨇𖨈𖨉𖨊𖨋𖨌𖨍𖨎𖨏𖨐𖨑𖨒𖨓𖨔𖨕𖨖𖨗𖨘𖨙𖨚𖨛𖨜𖨝𖨞𖨟𖨠𖨡𖨢𖨣𖨤𖨥𖨦𖨧𖨨𖨩𖨪𖨫𖨬𖨭𖨮𖨯𖨰𖨱𖨲𖨳𖨴𖨵𖨶𖨷𖨸𛀀𛀁𫝀𫝁𫝂𫝃𫝄𫝅𫝆𫝇𫝈𫝉𫝊𫝋𫝌𫝍𫝎𫝏𫝐𫝑𫝒𫝓𫝔𫝕𫝖𫝗𫝘𫝙𫝚𫝛𫝜𫝝𫝞𫝟𫝠𫝡𫝢𫝣𫝤𫝥𫝦𫝧𫝨𫝩𫝪𫝫𫝬𫝭𫝮𫝯𫝰𫝱𫝲𫝳𫝴𫝵𫝶𫝷𫝸𫝹𫝺𫝻𫝼𫝽𫝾𫝿𫞀𫞁𫞂𫞃𫞄𫞅𫞆𫞇𫞈𫞉𫞊𫞋𫞌𫞍𫞎𫞏𫞐𫞑𫞒𫞓𫞔𫞕𫞖𫞗𫞘𫞙𫞚𫞛𫞜𫞝𫞞𫞟𫞠𫞡𫞢𫞣𫞤𫞥𫞦𫞧𫞨𫞩𫞪𫞫𫞬𫞭𫞮𫞯𫞰𫞱𫞲𫞳𫞴𫞵𫞶𫞷𫞸𫞹𫞺𫞻𫞼𫞽𫞾𫞿𫟀𫟁𫟂𫟃𫟄𫟅𫟆𫟇𫟈𫟉𫟊𫟋𫟌𫟍𫟎𫟏𫟐𫟑𫟒𫟓𫟔𫟕𫟖𫟗𫟘𫟙𫟚𫟛𫟜𫟝𫟞𫟟𫟠𫟡𫟢𫟣𫟤𫟥𫟦𫟧𫟨𫟩𫟪𫟫𫟬𫟭𫟮𫟯𫟰𫟱𫟲𫟳𫟴𫟵𫟶𫟷𫟸𫟹𫟺𫟻𫟼𫟽𫟾𫟿𫠀𫠁𫠂𫠃𫠄𫠅𫠆𫠇𫠈𫠉𫠊𫠋𫠌𫠍𫠎𫠏𫠐𫠑𫠒𫠓𫠔𫠕𫠖𫠗𫠘𫠙𫠚𫠛𫠜𫠝',
                start: 4,
                end: 1833,
                loc: {
                  start: {
                    line: 1,
                    column: 4
                  },
                  end: {
                    line: 1,
                    column: 1833
                  }
                }
              },
              start: 4,
              end: 1833,
              loc: {
                start: {
                  line: 1,
                  column: 4
                },
                end: {
                  line: 1,
                  column: 1833
                }
              }
            }
          ],
          start: 0,
          end: 1834,
          loc: {
            start: {
              line: 1,
              column: 0
            },
            end: {
              line: 1,
              column: 1834
            }
          }
        }
      ],
      start: 0,
      end: 1834,
      loc: {
        start: {
          line: 1,
          column: 0
        },
        end: {
          line: 1,
          column: 1834
        }
      }
    }
  ],
  [
    `ԦԧؠࡀࡁࡂࡃࡄࡅࡆࡇࡈࡉࡊࡋࡌࡍࡎࡏࡐࡑࡒࡓࡔࡕࡖࡗࡘॳॴॵॶॷೱೲഩഺൎྌᯀᯁᯂᯃᯄᯅᯆᯇᯈᯉᯊᯋᯌᯍᯎᯏᯐᯑᯒᯓᯔᯕᯖᯗᯘᯙᯚᯛᯜᯝᯞᯟᯠᯡᯢᯣᯤᯥₕₖₗₘₙₚₛₜㆸㆹㆺꙠꙡꞍꞎꞐꞑꞠꞡꞢꞣꞤꞥꞦꞧꞨꞩꟺꬁꬂꬃꬄꬅꬆꬉꬊꬋꬌꬍꬎꬑꬒꬓꬔꬕꬖꬠꬡꬢꬣꬤꬥꬦꬨꬩꬪꬫꬬꬭꬮ𑀃𑀄𑀅𑀆𑀇𑀈𑀉𑀊𑀋𑀌𑀍𑀎𑀏𑀐𑀑𑀒𑀓𑀔𑀕𑀖𑀗𑀘𑀙𑀚𑀛𑀜𑀝𑀞𑀟𑀠𑀡𑀢𑀣𑀤𑀥𑀦𑀧𑀨𑀩𑀪𑀫𑀬𑀭𑀮𑀯𑀰𑀱𑀲𑀳𑀴𑀵𑀶𑀷𖠀𖠁𖠂𖠃𖠄𖠅𖠆𖠇𖠈𖠉𖠊𖠋𖠌𖠍𖠎𖠏𖠐𖠑𖠒𖠓𖠔𖠕𖠖𖠗𖠘𖠙𖠚𖠛𖠜𖠝𖠞𖠟𖠠𖠡𖠢𖠣𖠤𖠥𖠦𖠧𖠨𖠩𖠪𖠫𖠬𖠭𖠮𖠯𖠰𖠱𖠲𖠳𖠴𖠵𖠶𖠷𖠸𖠹𖠺𖠻𖠼𖠽𖠾𖠿𖡀𖡁𖡂𖡃𖡄𖡅𖡆𖡇𖡈𖡉𖡊𖡋𖡌𖡍𖡎𖡏𖡐𖡑𖡒𖡓𖡔𖡕𖡖𖡗𖡘𖡙𖡚𖡛𖡜𖡝𖡞𖡟𖡠𖡡𖡢𖡣𖡤𖡥𖡦𖡧𖡨𖡩𖡪𖡫𖡬𖡭𖡮𖡯𖡰𖡱𖡲𖡳𖡴𖡵𖡶𖡷𖡸𖡹𖡺𖡻𖡼𖡽𖡾𖡿𖢀𖢁𖢂𖢃𖢄𖢅𖢆𖢇𖢈𖢉𖢊𖢋𖢌𖢍𖢎𖢏𖢐𖢑𖢒𖢓𖢔𖢕𖢖𖢗𖢘𖢙𖢚𖢛𖢜𖢝𖢞𖢟𖢠𖢡𖢢𖢣𖢤𖢥𖢦𖢧𖢨𖢩𖢪𖢫𖢬𖢭𖢮𖢯𖢰𖢱𖢲𖢳𖢴𖢵𖢶𖢷𖢸𖢹𖢺𖢻𖢼𖢽𖢾𖢿𖣀𖣁𖣂𖣃𖣄𖣅𖣆𖣇𖣈𖣉𖣊𖣋𖣌𖣍𖣎𖣏𖣐𖣑𖣒𖣓𖣔𖣕𖣖𖣗𖣘𖣙𖣚𖣛𖣜𖣝𖣞𖣟𖣠𖣡𖣢𖣣𖣤𖣥𖣦𖣧𖣨𖣩𖣪𖣫𖣬𖣭𖣮𖣯𖣰𖣱𖣲𖣳𖣴𖣵𖣶𖣷𖣸𖣹𖣺𖣻𖣼𖣽𖣾𖣿𖤀𖤁𖤂𖤃𖤄𖤅𖤆𖤇𖤈𖤉𖤊𖤋𖤌𖤍𖤎𖤏𖤐𖤑𖤒𖤓𖤔𖤕𖤖𖤗𖤘𖤙𖤚𖤛𖤜𖤝𖤞𖤟𖤠𖤡𖤢𖤣𖤤𖤥𖤦𖤧𖤨𖤩𖤪𖤫𖤬𖤭𖤮𖤯𖤰𖤱𖤲𖤳𖤴𖤵𖤶𖤷𖤸𖤹𖤺𖤻𖤼𖤽𖤾𖤿𖥀𖥁𖥂𖥃𖥄𖥅𖥆𖥇𖥈𖥉𖥊𖥋𖥌𖥍𖥎𖥏𖥐𖥑𖥒𖥓𖥔𖥕𖥖𖥗𖥘𖥙𖥚𖥛𖥜𖥝𖥞𖥟𖥠𖥡𖥢𖥣𖥤𖥥𖥦𖥧𖥨𖥩𖥪𖥫𖥬𖥭𖥮𖥯𖥰𖥱𖥲𖥳𖥴𖥵𖥶𖥷𖥸𖥹𖥺𖥻𖥼𖥽𖥾𖥿𖦀𖦁𖦂𖦃𖦄𖦅𖦆𖦇𖦈𖦉𖦊𖦋𖦌𖦍𖦎𖦏𖦐𖦑𖦒𖦓𖦔𖦕𖦖𖦗𖦘𖦙𖦚𖦛𖦜𖦝𖦞𖦟𖦠𖦡𖦢𖦣𖦤𖦥𖦦𖦧𖦨𖦩𖦪𖦫𖦬𖦭𖦮𖦯𖦰𖦱𖦲𖦳𖦴𖦵𖦶𖦷𖦸𖦹𖦺𖦻𖦼𖦽𖦾𖦿𖧀𖧁𖧂𖧃𖧄𖧅𖧆𖧇𖧈𖧉𖧊𖧋𖧌𖧍𖧎𖧏𖧐𖧑𖧒𖧓𖧔𖧕𖧖𖧗𖧘𖧙𖧚𖧛𖧜𖧝𖧞𖧟𖧠𖧡𖧢𖧣𖧤𖧥𖧦𖧧𖧨𖧩𖧪𖧫𖧬𖧭𖧮𖧯𖧰𖧱𖧲𖧳𖧴𖧵𖧶𖧷𖧸𖧹𖧺𖧻𖧼𖧽𖧾𖧿𖨀𖨁𖨂𖨃𖨄𖨅𖨆𖨇𖨈𖨉𖨊𖨋𖨌𖨍𖨎𖨏𖨐𖨑𖨒𖨓𖨔𖨕𖨖𖨗𖨘𖨙𖨚𖨛𖨜𖨝𖨞𖨟𖨠𖨡𖨢𖨣𖨤𖨥𖨦𖨧𖨨𖨩𖨪𖨫𖨬𖨭𖨮𖨯𖨰𖨱𖨲𖨳𖨴𖨵𖨶𖨷𖨸𛀀𛀁𫝀𫝁𫝂𫝃𫝄𫝅𫝆𫝇𫝈𫝉𫝊𫝋𫝌𫝍𫝎𫝏𫝐𫝑𫝒𫝓𫝔𫝕𫝖𫝗𫝘𫝙𫝚𫝛𫝜𫝝𫝞𫝟𫝠𫝡𫝢𫝣𫝤𫝥𫝦𫝧𫝨𫝩𫝪𫝫𫝬𫝭𫝮𫝯𫝰𫝱𫝲𫝳𫝴𫝵𫝶𫝷𫝸𫝹𫝺𫝻𫝼𫝽𫝾𫝿𫞀𫞁𫞂𫞃𫞄𫞅𫞆𫞇𫞈𫞉𫞊𫞋𫞌𫞍𫞎𫞏𫞐𫞑𫞒𫞓𫞔𫞕𫞖𫞗𫞘𫞙𫞚𫞛𫞜𫞝𫞞𫞟𫞠𫞡𫞢𫞣𫞤𫞥𫞦𫞧𫞨𫞩𫞪𫞫𫞬𫞭𫞮𫞯𫞰𫞱𫞲𫞳𫞴𫞵𫞶𫞷𫞸𫞹𫞺𫞻𫞼𫞽𫞾𫞿𫟀𫟁𫟂𫟃𫟄𫟅𫟆𫟇𫟈𫟉𫟊𫟋𫟌𫟍𫟎𫟏𫟐𫟑𫟒𫟓𫟔𫟕𫟖𫟗𫟘𫟙𫟚𫟛𫟜𫟝𫟞𫟟𫟠𫟡𫟢𫟣𫟤𫟥𫟦𫟧𫟨𫟩𫟪𫟫𫟬𫟭𫟮𫟯𫟰𫟱𫟲𫟳𫟴𫟵𫟶𫟷𫟸𫟹𫟺𫟻𫟼𫟽𫟾𫟿𫠀𫠁𫠂𫠃𫠄𫠅𫠆𫠇𫠈𫠉𫠊𫠋𫠌𫠍𫠎𫠏𫠐𫠑𫠒𫠓𫠔𫠕𫠖𫠗𫠘𫠙𫠚𫠛𫠜𫠝;`,
    Context.OptionsLoc,
    {
      type: 'Program',
      sourceType: 'script',
      body: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'Identifier',
            name:
              'ԦԧؠࡀࡁࡂࡃࡄࡅࡆࡇࡈࡉࡊࡋࡌࡍࡎࡏࡐࡑࡒࡓࡔࡕࡖࡗࡘॳॴॵॶॷೱೲഩഺൎྌᯀᯁᯂᯃᯄᯅᯆᯇᯈᯉᯊᯋᯌᯍᯎᯏᯐᯑᯒᯓᯔᯕᯖᯗᯘᯙᯚᯛᯜᯝᯞᯟᯠᯡᯢᯣᯤᯥₕₖₗₘₙₚₛₜㆸㆹㆺꙠꙡꞍꞎꞐꞑꞠꞡꞢꞣꞤꞥꞦꞧꞨꞩꟺꬁꬂꬃꬄꬅꬆꬉꬊꬋꬌꬍꬎꬑꬒꬓꬔꬕꬖꬠꬡꬢꬣꬤꬥꬦꬨꬩꬪꬫꬬꬭꬮ𑀃𑀄𑀅𑀆𑀇𑀈𑀉𑀊𑀋𑀌𑀍𑀎𑀏𑀐𑀑𑀒𑀓𑀔𑀕𑀖𑀗𑀘𑀙𑀚𑀛𑀜𑀝𑀞𑀟𑀠𑀡𑀢𑀣𑀤𑀥𑀦𑀧𑀨𑀩𑀪𑀫𑀬𑀭𑀮𑀯𑀰𑀱𑀲𑀳𑀴𑀵𑀶𑀷𖠀𖠁𖠂𖠃𖠄𖠅𖠆𖠇𖠈𖠉𖠊𖠋𖠌𖠍𖠎𖠏𖠐𖠑𖠒𖠓𖠔𖠕𖠖𖠗𖠘𖠙𖠚𖠛𖠜𖠝𖠞𖠟𖠠𖠡𖠢𖠣𖠤𖠥𖠦𖠧𖠨𖠩𖠪𖠫𖠬𖠭𖠮𖠯𖠰𖠱𖠲𖠳𖠴𖠵𖠶𖠷𖠸𖠹𖠺𖠻𖠼𖠽𖠾𖠿𖡀𖡁𖡂𖡃𖡄𖡅𖡆𖡇𖡈𖡉𖡊𖡋𖡌𖡍𖡎𖡏𖡐𖡑𖡒𖡓𖡔𖡕𖡖𖡗𖡘𖡙𖡚𖡛𖡜𖡝𖡞𖡟𖡠𖡡𖡢𖡣𖡤𖡥𖡦𖡧𖡨𖡩𖡪𖡫𖡬𖡭𖡮𖡯𖡰𖡱𖡲𖡳𖡴𖡵𖡶𖡷𖡸𖡹𖡺𖡻𖡼𖡽𖡾𖡿𖢀𖢁𖢂𖢃𖢄𖢅𖢆𖢇𖢈𖢉𖢊𖢋𖢌𖢍𖢎𖢏𖢐𖢑𖢒𖢓𖢔𖢕𖢖𖢗𖢘𖢙𖢚𖢛𖢜𖢝𖢞𖢟𖢠𖢡𖢢𖢣𖢤𖢥𖢦𖢧𖢨𖢩𖢪𖢫𖢬𖢭𖢮𖢯𖢰𖢱𖢲𖢳𖢴𖢵𖢶𖢷𖢸𖢹𖢺𖢻𖢼𖢽𖢾𖢿𖣀𖣁𖣂𖣃𖣄𖣅𖣆𖣇𖣈𖣉𖣊𖣋𖣌𖣍𖣎𖣏𖣐𖣑𖣒𖣓𖣔𖣕𖣖𖣗𖣘𖣙𖣚𖣛𖣜𖣝𖣞𖣟𖣠𖣡𖣢𖣣𖣤𖣥𖣦𖣧𖣨𖣩𖣪𖣫𖣬𖣭𖣮𖣯𖣰𖣱𖣲𖣳𖣴𖣵𖣶𖣷𖣸𖣹𖣺𖣻𖣼𖣽𖣾𖣿𖤀𖤁𖤂𖤃𖤄𖤅𖤆𖤇𖤈𖤉𖤊𖤋𖤌𖤍𖤎𖤏𖤐𖤑𖤒𖤓𖤔𖤕𖤖𖤗𖤘𖤙𖤚𖤛𖤜𖤝𖤞𖤟𖤠𖤡𖤢𖤣𖤤𖤥𖤦𖤧𖤨𖤩𖤪𖤫𖤬𖤭𖤮𖤯𖤰𖤱𖤲𖤳𖤴𖤵𖤶𖤷𖤸𖤹𖤺𖤻𖤼𖤽𖤾𖤿𖥀𖥁𖥂𖥃𖥄𖥅𖥆𖥇𖥈𖥉𖥊𖥋𖥌𖥍𖥎𖥏𖥐𖥑𖥒𖥓𖥔𖥕𖥖𖥗𖥘𖥙𖥚𖥛𖥜𖥝𖥞𖥟𖥠𖥡𖥢𖥣𖥤𖥥𖥦𖥧𖥨𖥩𖥪𖥫𖥬𖥭𖥮𖥯𖥰𖥱𖥲𖥳𖥴𖥵𖥶𖥷𖥸𖥹𖥺𖥻𖥼𖥽𖥾𖥿𖦀𖦁𖦂𖦃𖦄𖦅𖦆𖦇𖦈𖦉𖦊𖦋𖦌𖦍𖦎𖦏𖦐𖦑𖦒𖦓𖦔𖦕𖦖𖦗𖦘𖦙𖦚𖦛𖦜𖦝𖦞𖦟𖦠𖦡𖦢𖦣𖦤𖦥𖦦𖦧𖦨𖦩𖦪𖦫𖦬𖦭𖦮𖦯𖦰𖦱𖦲𖦳𖦴𖦵𖦶𖦷𖦸𖦹𖦺𖦻𖦼𖦽𖦾𖦿𖧀𖧁𖧂𖧃𖧄𖧅𖧆𖧇𖧈𖧉𖧊𖧋𖧌𖧍𖧎𖧏𖧐𖧑𖧒𖧓𖧔𖧕𖧖𖧗𖧘𖧙𖧚𖧛𖧜𖧝𖧞𖧟𖧠𖧡𖧢𖧣𖧤𖧥𖧦𖧧𖧨𖧩𖧪𖧫𖧬𖧭𖧮𖧯𖧰𖧱𖧲𖧳𖧴𖧵𖧶𖧷𖧸𖧹𖧺𖧻𖧼𖧽𖧾𖧿𖨀𖨁𖨂𖨃𖨄𖨅𖨆𖨇𖨈𖨉𖨊𖨋𖨌𖨍𖨎𖨏𖨐𖨑𖨒𖨓𖨔𖨕𖨖𖨗𖨘𖨙𖨚𖨛𖨜𖨝𖨞𖨟𖨠𖨡𖨢𖨣𖨤𖨥𖨦𖨧𖨨𖨩𖨪𖨫𖨬𖨭𖨮𖨯𖨰𖨱𖨲𖨳𖨴𖨵𖨶𖨷𖨸𛀀𛀁𫝀𫝁𫝂𫝃𫝄𫝅𫝆𫝇𫝈𫝉𫝊𫝋𫝌𫝍𫝎𫝏𫝐𫝑𫝒𫝓𫝔𫝕𫝖𫝗𫝘𫝙𫝚𫝛𫝜𫝝𫝞𫝟𫝠𫝡𫝢𫝣𫝤𫝥𫝦𫝧𫝨𫝩𫝪𫝫𫝬𫝭𫝮𫝯𫝰𫝱𫝲𫝳𫝴𫝵𫝶𫝷𫝸𫝹𫝺𫝻𫝼𫝽𫝾𫝿𫞀𫞁𫞂𫞃𫞄𫞅𫞆𫞇𫞈𫞉𫞊𫞋𫞌𫞍𫞎𫞏𫞐𫞑𫞒𫞓𫞔𫞕𫞖𫞗𫞘𫞙𫞚𫞛𫞜𫞝𫞞𫞟𫞠𫞡𫞢𫞣𫞤𫞥𫞦𫞧𫞨𫞩𫞪𫞫𫞬𫞭𫞮𫞯𫞰𫞱𫞲𫞳𫞴𫞵𫞶𫞷𫞸𫞹𫞺𫞻𫞼𫞽𫞾𫞿𫟀𫟁𫟂𫟃𫟄𫟅𫟆𫟇𫟈𫟉𫟊𫟋𫟌𫟍𫟎𫟏𫟐𫟑𫟒𫟓𫟔𫟕𫟖𫟗𫟘𫟙𫟚𫟛𫟜𫟝𫟞𫟟𫟠𫟡𫟢𫟣𫟤𫟥𫟦𫟧𫟨𫟩𫟪𫟫𫟬𫟭𫟮𫟯𫟰𫟱𫟲𫟳𫟴𫟵𫟶𫟷𫟸𫟹𫟺𫟻𫟼𫟽𫟾𫟿𫠀𫠁𫠂𫠃𫠄𫠅𫠆𫠇𫠈𫠉𫠊𫠋𫠌𫠍𫠎𫠏𫠐𫠑𫠒𫠓𫠔𫠕𫠖𫠗𫠘𫠙𫠚𫠛𫠜𫠝',
            start: 0,
            end: 1829,
            loc: {
              start: {
                line: 1,
                column: 0
              },
              end: {
                line: 1,
                column: 1829
              }
            }
          },
          start: 0,
          end: 1830,
          loc: {
            start: {
              line: 1,
              column: 0
            },
            end: {
              line: 1,
              column: 1830
            }
          }
        }
      ],
      start: 0,
      end: 1830,
      loc: {
        start: {
          line: 1,
          column: 0
        },
        end: {
          line: 1,
          column: 1830
        }
      }
    }
  ],
  [
    `var ͿԨԩԪԫԬԭԮԯࢡࢭࢮࢯࢰࢱࢲॸঀఴᛱᛲᛳᛴᛵᛶᛷᛸᤝᤞꚘꚙꚚꚛꚜꚝꞔꞕꞖꞗꞘꞙꞚꞛꞜꞝꞞꞟꞫꞬꞭꞰꞱꟷꧠꧡꧢꧣꧤꧦꧧꧨꧩꧪꧫꧬꧭꧮꧯꧺꧻꧼꧽꧾꩾꩿꬰꬱꬲꬳꬴꬵꬶꬷꬸꬹꬺꬻꬼꬽꬾꬿꭀꭁꭂꭃꭄꭅꭆꭇꭈꭉꭊꭋꭌꭍꭎꭏꭐꭑꭒꭓꭔꭕꭖꭗꭘꭙꭚꭜꭝꭞꭟꭤꭥ𐌟𐍐𐍑𐍒𐍓𐍔𐍕𐍖𐍗𐍘𐍙𐍚𐍛𐍜𐍝𐍞𐍟𐍠𐍡𐍢𐍣𐍤𐍥𐍦𐍧𐍨𐍩𐍪𐍫𐍬𐍭𐍮𐍯𐍰𐍱𐍲𐍳𐍴𐍵𐔀𐔁𐔂𐔃𐔄𐔅𐔆𐔇𐔈𐔉𐔊𐔋𐔌𐔍𐔎𐔏𐔐𐔑𐔒𐔓𐔔𐔕𐔖𐔗𐔘𐔙𐔚𐔛𐔜𐔝𐔞𐔟𐔠𐔡𐔢𐔣𐔤𐔥𐔦𐔧𐔰𐔱𐔲𐔳𐔴𐔵𐔶𐔷𐔸𐔹𐔺𐔻𐔼𐔽𐔾𐔿𐕀𐕁𐕂𐕃𐕄𐕅𐕆𐕇𐕈𐕉𐕊𐕋𐕌𐕍𐕎𐕏𐕐𐕑𐕒𐕓𐕔𐕕𐕖𐕗𐕘𐕙𐕚𐕛𐕜𐕝𐕞𐕟𐕠𐕡𐕢𐕣𐘀𐘁𐘂𐘃𐘄𐘅𐘆𐘇𐘈𐘉𐘊𐘋𐘌𐘍𐘎𐘏𐘐𐘑𐘒𐘓𐘔𐘕𐘖𐘗𐘘𐘙𐘚𐘛𐘜𐘝𐘞𐘟𐘠𐘡𐘢𐘣𐘤𐘥𐘦𐘧𐘨𐘩𐘪𐘫𐘬𐘭𐘮𐘯𐘰𐘱𐘲𐘳𐘴𐘵𐘶𐘷𐘸𐘹𐘺𐘻𐘼𐘽𐘾𐘿𐙀𐙁𐙂𐙃𐙄𐙅𐙆𐙇𐙈𐙉𐙊𐙋𐙌𐙍𐙎𐙏𐙐𐙑𐙒𐙓𐙔𐙕𐙖𐙗𐙘𐙙𐙚𐙛𐙜𐙝𐙞𐙟𐙠𐙡𐙢𐙣𐙤𐙥𐙦𐙧𐙨𐙩𐙪𐙫𐙬𐙭𐙮𐙯𐙰𐙱𐙲𐙳𐙴𐙵𐙶𐙷𐙸𐙹𐙺𐙻𐙼𐙽𐙾𐙿𐚀𐚁𐚂𐚃𐚄𐚅𐚆𐚇𐚈𐚉𐚊𐚋𐚌𐚍𐚎𐚏𐚐𐚑𐚒𐚓𐚔𐚕𐚖𐚗𐚘𐚙𐚚𐚛𐚜𐚝𐚞𐚟𐚠𐚡𐚢𐚣𐚤𐚥𐚦𐚧𐚨𐚩𐚪𐚫𐚬𐚭𐚮𐚯𐚰𐚱𐚲𐚳𐚴𐚵𐚶𐚷𐚸𐚹𐚺𐚻𐚼𐚽𐚾𐚿𐛀𐛁𐛂𐛃𐛄𐛅𐛆𐛇𐛈𐛉𐛊𐛋𐛌𐛍𐛎𐛏𐛐𐛑𐛒𐛓𐛔𐛕𐛖𐛗𐛘𐛙𐛚𐛛𐛜𐛝𐛞𐛟𐛠𐛡𐛢𐛣𐛤𐛥𐛦𐛧𐛨𐛩𐛪𐛫𐛬𐛭𐛮𐛯𐛰𐛱𐛲𐛳𐛴𐛵𐛶𐛷𐛸𐛹𐛺𐛻𐛼𐛽𐛾𐛿𐜀𐜁𐜂𐜃𐜄𐜅𐜆𐜇𐜈𐜉𐜊𐜋𐜌𐜍𐜎𐜏𐜐𐜑𐜒𐜓𐜔𐜕𐜖𐜗𐜘𐜙𐜚𐜛𐜜𐜝𐜞𐜟𐜠𐜡𐜢𐜣𐜤𐜥𐜦𐜧𐜨𐜩𐜪𐜫𐜬𐜭𐜮𐜯𐜰𐜱𐜲𐜳𐜴𐜵𐜶𐝀𐝁𐝂𐝃𐝄𐝅𐝆𐝇𐝈𐝉𐝊𐝋𐝌𐝍𐝎𐝏𐝐𐝑𐝒𐝓𐝔𐝕𐝠𐝡𐝢𐝣𐝤𐝥𐝦𐝧𐡠𐡡𐡢𐡣𐡤𐡥𐡦𐡧𐡨𐡩𐡪𐡫𐡬𐡭𐡮𐡯𐡰𐡱𐡲𐡳𐡴𐡵𐡶𐢀𐢁𐢂𐢃𐢄𐢅𐢆𐢇𐢈𐢉𐢊𐢋𐢌𐢍𐢎𐢏𐢐𐢑𐢒𐢓𐢔𐢕𐢖𐢗𐢘𐢙𐢚𐢛𐢜𐢝𐢞𐪀𐪁𐪂𐪃𐪄𐪅𐪆𐪇𐪈𐪉𐪊𐪋𐪌𐪍𐪎𐪏𐪐𐪑𐪒𐪓𐪔𐪕𐪖𐪗𐪘𐪙𐪚𐪛𐪜𐫀𐫁𐫂𐫃𐫄𐫅𐫆𐫇𐫉𐫊𐫋𐫌𐫍𐫎𐫏𐫐𐫑𐫒𐫓𐫔𐫕𐫖𐫗𐫘𐫙𐫚𐫛𐫜𐫝𐫞𐫟𐫠𐫡𐫢𐫣𐫤𐮀𐮁𐮂𐮃𐮄𐮅𐮆𐮇𐮈𐮉𐮊𐮋𐮌𐮍𐮎𐮏𐮐𐮑𑅐𑅑𑅒𑅓𑅔𑅕𑅖𑅗𑅘𑅙𑅚𑅛𑅜𑅝𑅞𑅟𑅠𑅡𑅢𑅣𑅤𑅥𑅦𑅧𑅨𑅩𑅪𑅫𑅬𑅭𑅮𑅯𑅰𑅱𑅲𑅶𑇚𑈀𑈁𑈂𑈃𑈄𑈅𑈆𑈇𑈈𑈉𑈊𑈋𑈌𑈍𑈎𑈏𑈐𑈑𑈓𑈔𑈕𑈖𑈗𑈘𑈙𑈚𑈛𑈜𑈝𑈞𑈟𑈠𑈡𑈢𑈣𑈤𑈥𑈦𑈧𑈨𑈩𑈪𑈫𑊰𑊱𑊲𑊳𑊴𑊵𑊶𑊷𑊸𑊹𑊺𑊻𑊼𑊽𑊾𑊿𑋀𑋁𑋂𑋃𑋄𑋅𑋆𑋇𑋈𑋉𑋊𑋋𑋌𑋍𑋎𑋏𑋐𑋑𑋒𑋓𑋔𑋕𑋖𑋗𑋘𑋙𑋚𑋛𑋜𑋝𑋞𑌅𑌆𑌇𑌈𑌉𑌊𑌋𑌌𑌏𑌐𑌓𑌔𑌕𑌖𑌗𑌘𑌙𑌚𑌛𑌜𑌝𑌞𑌟𑌠𑌡𑌢𑌣𑌤𑌥𑌦𑌧𑌨𑌪𑌫𑌬𑌭𑌮𑌯𑌰𑌲𑌳𑌵𑌶𑌷𑌸𑌹𑌽𑍝𑍞𑍟𑍠𑍡𑒀𑒁𑒂𑒃𑒄𑒅𑒆𑒇𑒈𑒉𑒊𑒋𑒌𑒍𑒎𑒏𑒐𑒑𑒒𑒓𑒔𑒕𑒖𑒗𑒘𑒙𑒚𑒛𑒜𑒝𑒞𑒟𑒠𑒡𑒢𑒣𑒤𑒥𑒦𑒧𑒨𑒩𑒪𑒫𑒬𑒭𑒮𑒯𑓄𑓅𑓇𑖀𑖁𑖂𑖃𑖄𑖅𑖆𑖇𑖈𑖉𑖊𑖋𑖌𑖍𑖎𑖏𑖐𑖑𑖒𑖓𑖔𑖕𑖖𑖗𑖘𑖙𑖚𑖛𑖜𑖝𑖞𑖟𑖠𑖡𑖢𑖣𑖤𑖥𑖦𑖧𑖨𑖩𑖪𑖫𑖬𑖭𑖮𑘀𑘁𑘂𑘃𑘄𑘅𑘆𑘇𑘈𑘉𑘊𑘋𑘌𑘍𑘎𑘏𑘐𑘑𑘒𑘓𑘔𑘕𑘖𑘗𑘘𑘙𑘚𑘛𑘜𑘝𑘞𑘟𑘠𑘡𑘢𑘣𑘤𑘥𑘦𑘧𑘨𑘩𑘪𑘫𑘬𑘭𑘮𑘯𑙄𑢠𑢡𑢢𑢣𑢤𑢥𑢦𑢧𑢨𑢩𑢪𑢫𑢬𑢭𑢮𑢯𑢰𑢱𑢲𑢳𑢴𑢵𑢶𑢷𑢸𑢹𑢺𑢻𑢼𑢽𑢾𑢿𑣀𑣁𑣂𑣃𑣄𑣅𑣆𑣇𑣈𑣉𑣊𑣋𑣌𑣍𑣎𑣏𑣐𑣑𑣒𑣓𑣔𑣕𑣖𑣗𑣘𑣙𑣚𑣛𑣜𑣝𑣞𑣟𑣿𑫀𑫁𑫂𑫃𑫄𑫅𑫆𑫇𑫈𑫉𑫊𑫋𑫌𑫍𑫎𑫏𑫐𑫑𑫒𑫓𑫔𑫕𑫖𑫗𑫘𑫙𑫚𑫛𑫜𑫝𑫞𑫟𑫠𑫡𑫢𑫣𑫤𑫥𑫦𑫧𑫨𑫩𑫪𑫫𑫬𑫭𑫮𑫯𑫰𑫱𑫲𑫳𑫴𑫵𑫶𑫷𑫸𒍯𒍰𒍱𒍲𒍳𒍴𒍵𒍶𒍷𒍸𒍹𒍺𒍻𒍼𒍽𒍾𒍿𒎀𒎁𒎂𒎃𒎄𒎅𒎆𒎇𒎈𒎉𒎊𒎋𒎌𒎍𒎎𒎏𒎐𒎑𒎒𒎓𒎔𒎕𒎖𒎗𒎘𒑣𒑤𒑥𒑦𒑧𒑨𒑩𒑪𒑫𒑬𒑭𒑮𖩀𖩁𖩂𖩃𖩄𖩅𖩆𖩇𖩈𖩉𖩊𖩋𖩌𖩍𖩎𖩏𖩐𖩑𖩒𖩓𖩔𖩕𖩖𖩗𖩘𖩙𖩚𖩛𖩜𖩝𖩞𖫐𖫑𖫒𖫓𖫔𖫕𖫖𖫗𖫘𖫙𖫚𖫛𖫜𖫝𖫞𖫟𖫠𖫡𖫢𖫣𖫤𖫥𖫦𖫧𖫨𖫩𖫪𖫫𖫬𖫭𖬀𖬁𖬂𖬃𖬄𖬅𖬆𖬇𖬈𖬉𖬊𖬋𖬌𖬍𖬎𖬏𖬐𖬑𖬒𖬓𖬔𖬕𖬖𖬗𖬘𖬙𖬚𖬛𖬜𖬝𖬞𖬟𖬠𖬡𖬢𖬣𖬤𖬥𖬦𖬧𖬨𖬩𖬪𖬫𖬬𖬭𖬮𖬯𖭀𖭁𖭂𖭃𖭣𖭤𖭥𖭦𖭧𖭨𖭩𖭪𖭫𖭬𖭭𖭮𖭯𖭰𖭱𖭲𖭳𖭴𖭵𖭶𖭷𖭽𖭾𖭿𖮀𖮁𖮂𖮃𖮄𖮅𖮆𖮇𖮈𖮉𖮊𖮋𖮌𖮍𖮎𖮏𛰀𛰁𛰂𛰃𛰄𛰅𛰆𛰇𛰈𛰉𛰊𛰋𛰌𛰍𛰎𛰏𛰐𛰑𛰒𛰓𛰔𛰕𛰖𛰗𛰘𛰙𛰚𛰛𛰜𛰝𛰞𛰟𛰠𛰡𛰢𛰣𛰤𛰥𛰦𛰧𛰨𛰩𛰪𛰫𛰬𛰭𛰮𛰯𛰰𛰱𛰲𛰳𛰴𛰵𛰶𛰷𛰸𛰹𛰺𛰻𛰼𛰽𛰾𛰿𛱀𛱁𛱂𛱃𛱄𛱅𛱆𛱇𛱈𛱉𛱊𛱋𛱌𛱍𛱎𛱏𛱐𛱑𛱒𛱓𛱔𛱕𛱖𛱗𛱘𛱙𛱚𛱛𛱜𛱝𛱞𛱟𛱠𛱡𛱢𛱣𛱤𛱥𛱦𛱧𛱨𛱩𛱪𛱰𛱱𛱲𛱳𛱴𛱵𛱶𛱷𛱸𛱹𛱺𛱻𛱼𛲀𛲁𛲂𛲃𛲄𛲅𛲆𛲇𛲈𛲐𛲑𛲒𛲓𛲔𛲕𛲖𛲗𛲘𛲙𞠀𞠁𞠂𞠃𞠄𞠅𞠆𞠇𞠈𞠉𞠊𞠋𞠌𞠍𞠎𞠏𞠐𞠑𞠒𞠓𞠔𞠕𞠖𞠗𞠘𞠙𞠚𞠛𞠜𞠝𞠞𞠟𞠠𞠡𞠢𞠣𞠤𞠥𞠦𞠧𞠨𞠩𞠪𞠫𞠬𞠭𞠮𞠯𞠰𞠱𞠲𞠳𞠴𞠵𞠶𞠷𞠸𞠹𞠺𞠻𞠼𞠽𞠾𞠿𞡀𞡁𞡂𞡃𞡄𞡅𞡆𞡇𞡈𞡉𞡊𞡋𞡌𞡍𞡎𞡏𞡐𞡑𞡒𞡓𞡔𞡕𞡖𞡗𞡘𞡙𞡚𞡛𞡜𞡝𞡞𞡟𞡠𞡡𞡢𞡣𞡤𞡥𞡦𞡧𞡨𞡩𞡪𞡫𞡬𞡭𞡮𞡯𞡰𞡱𞡲𞡳𞡴𞡵𞡶𞡷𞡸𞡹𞡺𞡻𞡼𞡽𞡾𞡿𞢀𞢁𞢂𞢃𞢄𞢅𞢆𞢇𞢈𞢉𞢊𞢋𞢌𞢍𞢎𞢏𞢐𞢑𞢒𞢓𞢔𞢕𞢖𞢗𞢘𞢙𞢚𞢛𞢜𞢝𞢞𞢟𞢠𞢡𞢢𞢣𞢤𞢥𞢦𞢧𞢨𞢩𞢪𞢫𞢬𞢭𞢮𞢯𞢰𞢱𞢲𞢳𞢴𞢵𞢶𞢷𞢸𞢹𞢺𞢻𞢼𞢽𞢾𞢿𞣀𞣁𞣂𞣃𞣄;`,
    Context.OptionsLoc,
    {
      type: 'Program',
      sourceType: 'script',
      body: [
        {
          type: 'VariableDeclaration',
          kind: 'var',
          declarations: [
            {
              type: 'VariableDeclarator',
              init: null,
              id: {
                type: 'Identifier',
                name:
                  'ͿԨԩԪԫԬԭԮԯࢡࢭࢮࢯࢰࢱࢲॸঀఴᛱᛲᛳᛴᛵᛶᛷᛸᤝᤞꚘꚙꚚꚛꚜꚝꞔꞕꞖꞗꞘꞙꞚꞛꞜꞝꞞꞟꞫꞬꞭꞰꞱꟷꧠꧡꧢꧣꧤꧦꧧꧨꧩꧪꧫꧬꧭꧮꧯꧺꧻꧼꧽꧾꩾꩿꬰꬱꬲꬳꬴꬵꬶꬷꬸꬹꬺꬻꬼꬽꬾꬿꭀꭁꭂꭃꭄꭅꭆꭇꭈꭉꭊꭋꭌꭍꭎꭏꭐꭑꭒꭓꭔꭕꭖꭗꭘꭙꭚꭜꭝꭞꭟꭤꭥ𐌟𐍐𐍑𐍒𐍓𐍔𐍕𐍖𐍗𐍘𐍙𐍚𐍛𐍜𐍝𐍞𐍟𐍠𐍡𐍢𐍣𐍤𐍥𐍦𐍧𐍨𐍩𐍪𐍫𐍬𐍭𐍮𐍯𐍰𐍱𐍲𐍳𐍴𐍵𐔀𐔁𐔂𐔃𐔄𐔅𐔆𐔇𐔈𐔉𐔊𐔋𐔌𐔍𐔎𐔏𐔐𐔑𐔒𐔓𐔔𐔕𐔖𐔗𐔘𐔙𐔚𐔛𐔜𐔝𐔞𐔟𐔠𐔡𐔢𐔣𐔤𐔥𐔦𐔧𐔰𐔱𐔲𐔳𐔴𐔵𐔶𐔷𐔸𐔹𐔺𐔻𐔼𐔽𐔾𐔿𐕀𐕁𐕂𐕃𐕄𐕅𐕆𐕇𐕈𐕉𐕊𐕋𐕌𐕍𐕎𐕏𐕐𐕑𐕒𐕓𐕔𐕕𐕖𐕗𐕘𐕙𐕚𐕛𐕜𐕝𐕞𐕟𐕠𐕡𐕢𐕣𐘀𐘁𐘂𐘃𐘄𐘅𐘆𐘇𐘈𐘉𐘊𐘋𐘌𐘍𐘎𐘏𐘐𐘑𐘒𐘓𐘔𐘕𐘖𐘗𐘘𐘙𐘚𐘛𐘜𐘝𐘞𐘟𐘠𐘡𐘢𐘣𐘤𐘥𐘦𐘧𐘨𐘩𐘪𐘫𐘬𐘭𐘮𐘯𐘰𐘱𐘲𐘳𐘴𐘵𐘶𐘷𐘸𐘹𐘺𐘻𐘼𐘽𐘾𐘿𐙀𐙁𐙂𐙃𐙄𐙅𐙆𐙇𐙈𐙉𐙊𐙋𐙌𐙍𐙎𐙏𐙐𐙑𐙒𐙓𐙔𐙕𐙖𐙗𐙘𐙙𐙚𐙛𐙜𐙝𐙞𐙟𐙠𐙡𐙢𐙣𐙤𐙥𐙦𐙧𐙨𐙩𐙪𐙫𐙬𐙭𐙮𐙯𐙰𐙱𐙲𐙳𐙴𐙵𐙶𐙷𐙸𐙹𐙺𐙻𐙼𐙽𐙾𐙿𐚀𐚁𐚂𐚃𐚄𐚅𐚆𐚇𐚈𐚉𐚊𐚋𐚌𐚍𐚎𐚏𐚐𐚑𐚒𐚓𐚔𐚕𐚖𐚗𐚘𐚙𐚚𐚛𐚜𐚝𐚞𐚟𐚠𐚡𐚢𐚣𐚤𐚥𐚦𐚧𐚨𐚩𐚪𐚫𐚬𐚭𐚮𐚯𐚰𐚱𐚲𐚳𐚴𐚵𐚶𐚷𐚸𐚹𐚺𐚻𐚼𐚽𐚾𐚿𐛀𐛁𐛂𐛃𐛄𐛅𐛆𐛇𐛈𐛉𐛊𐛋𐛌𐛍𐛎𐛏𐛐𐛑𐛒𐛓𐛔𐛕𐛖𐛗𐛘𐛙𐛚𐛛𐛜𐛝𐛞𐛟𐛠𐛡𐛢𐛣𐛤𐛥𐛦𐛧𐛨𐛩𐛪𐛫𐛬𐛭𐛮𐛯𐛰𐛱𐛲𐛳𐛴𐛵𐛶𐛷𐛸𐛹𐛺𐛻𐛼𐛽𐛾𐛿𐜀𐜁𐜂𐜃𐜄𐜅𐜆𐜇𐜈𐜉𐜊𐜋𐜌𐜍𐜎𐜏𐜐𐜑𐜒𐜓𐜔𐜕𐜖𐜗𐜘𐜙𐜚𐜛𐜜𐜝𐜞𐜟𐜠𐜡𐜢𐜣𐜤𐜥𐜦𐜧𐜨𐜩𐜪𐜫𐜬𐜭𐜮𐜯𐜰𐜱𐜲𐜳𐜴𐜵𐜶𐝀𐝁𐝂𐝃𐝄𐝅𐝆𐝇𐝈𐝉𐝊𐝋𐝌𐝍𐝎𐝏𐝐𐝑𐝒𐝓𐝔𐝕𐝠𐝡𐝢𐝣𐝤𐝥𐝦𐝧𐡠𐡡𐡢𐡣𐡤𐡥𐡦𐡧𐡨𐡩𐡪𐡫𐡬𐡭𐡮𐡯𐡰𐡱𐡲𐡳𐡴𐡵𐡶𐢀𐢁𐢂𐢃𐢄𐢅𐢆𐢇𐢈𐢉𐢊𐢋𐢌𐢍𐢎𐢏𐢐𐢑𐢒𐢓𐢔𐢕𐢖𐢗𐢘𐢙𐢚𐢛𐢜𐢝𐢞𐪀𐪁𐪂𐪃𐪄𐪅𐪆𐪇𐪈𐪉𐪊𐪋𐪌𐪍𐪎𐪏𐪐𐪑𐪒𐪓𐪔𐪕𐪖𐪗𐪘𐪙𐪚𐪛𐪜𐫀𐫁𐫂𐫃𐫄𐫅𐫆𐫇𐫉𐫊𐫋𐫌𐫍𐫎𐫏𐫐𐫑𐫒𐫓𐫔𐫕𐫖𐫗𐫘𐫙𐫚𐫛𐫜𐫝𐫞𐫟𐫠𐫡𐫢𐫣𐫤𐮀𐮁𐮂𐮃𐮄𐮅𐮆𐮇𐮈𐮉𐮊𐮋𐮌𐮍𐮎𐮏𐮐𐮑𑅐𑅑𑅒𑅓𑅔𑅕𑅖𑅗𑅘𑅙𑅚𑅛𑅜𑅝𑅞𑅟𑅠𑅡𑅢𑅣𑅤𑅥𑅦𑅧𑅨𑅩𑅪𑅫𑅬𑅭𑅮𑅯𑅰𑅱𑅲𑅶𑇚𑈀𑈁𑈂𑈃𑈄𑈅𑈆𑈇𑈈𑈉𑈊𑈋𑈌𑈍𑈎𑈏𑈐𑈑𑈓𑈔𑈕𑈖𑈗𑈘𑈙𑈚𑈛𑈜𑈝𑈞𑈟𑈠𑈡𑈢𑈣𑈤𑈥𑈦𑈧𑈨𑈩𑈪𑈫𑊰𑊱𑊲𑊳𑊴𑊵𑊶𑊷𑊸𑊹𑊺𑊻𑊼𑊽𑊾𑊿𑋀𑋁𑋂𑋃𑋄𑋅𑋆𑋇𑋈𑋉𑋊𑋋𑋌𑋍𑋎𑋏𑋐𑋑𑋒𑋓𑋔𑋕𑋖𑋗𑋘𑋙𑋚𑋛𑋜𑋝𑋞𑌅𑌆𑌇𑌈𑌉𑌊𑌋𑌌𑌏𑌐𑌓𑌔𑌕𑌖𑌗𑌘𑌙𑌚𑌛𑌜𑌝𑌞𑌟𑌠𑌡𑌢𑌣𑌤𑌥𑌦𑌧𑌨𑌪𑌫𑌬𑌭𑌮𑌯𑌰𑌲𑌳𑌵𑌶𑌷𑌸𑌹𑌽𑍝𑍞𑍟𑍠𑍡𑒀𑒁𑒂𑒃𑒄𑒅𑒆𑒇𑒈𑒉𑒊𑒋𑒌𑒍𑒎𑒏𑒐𑒑𑒒𑒓𑒔𑒕𑒖𑒗𑒘𑒙𑒚𑒛𑒜𑒝𑒞𑒟𑒠𑒡𑒢𑒣𑒤𑒥𑒦𑒧𑒨𑒩𑒪𑒫𑒬𑒭𑒮𑒯𑓄𑓅𑓇𑖀𑖁𑖂𑖃𑖄𑖅𑖆𑖇𑖈𑖉𑖊𑖋𑖌𑖍𑖎𑖏𑖐𑖑𑖒𑖓𑖔𑖕𑖖𑖗𑖘𑖙𑖚𑖛𑖜𑖝𑖞𑖟𑖠𑖡𑖢𑖣𑖤𑖥𑖦𑖧𑖨𑖩𑖪𑖫𑖬𑖭𑖮𑘀𑘁𑘂𑘃𑘄𑘅𑘆𑘇𑘈𑘉𑘊𑘋𑘌𑘍𑘎𑘏𑘐𑘑𑘒𑘓𑘔𑘕𑘖𑘗𑘘𑘙𑘚𑘛𑘜𑘝𑘞𑘟𑘠𑘡𑘢𑘣𑘤𑘥𑘦𑘧𑘨𑘩𑘪𑘫𑘬𑘭𑘮𑘯𑙄𑢠𑢡𑢢𑢣𑢤𑢥𑢦𑢧𑢨𑢩𑢪𑢫𑢬𑢭𑢮𑢯𑢰𑢱𑢲𑢳𑢴𑢵𑢶𑢷𑢸𑢹𑢺𑢻𑢼𑢽𑢾𑢿𑣀𑣁𑣂𑣃𑣄𑣅𑣆𑣇𑣈𑣉𑣊𑣋𑣌𑣍𑣎𑣏𑣐𑣑𑣒𑣓𑣔𑣕𑣖𑣗𑣘𑣙𑣚𑣛𑣜𑣝𑣞𑣟𑣿𑫀𑫁𑫂𑫃𑫄𑫅𑫆𑫇𑫈𑫉𑫊𑫋𑫌𑫍𑫎𑫏𑫐𑫑𑫒𑫓𑫔𑫕𑫖𑫗𑫘𑫙𑫚𑫛𑫜𑫝𑫞𑫟𑫠𑫡𑫢𑫣𑫤𑫥𑫦𑫧𑫨𑫩𑫪𑫫𑫬𑫭𑫮𑫯𑫰𑫱𑫲𑫳𑫴𑫵𑫶𑫷𑫸𒍯𒍰𒍱𒍲𒍳𒍴𒍵𒍶𒍷𒍸𒍹𒍺𒍻𒍼𒍽𒍾𒍿𒎀𒎁𒎂𒎃𒎄𒎅𒎆𒎇𒎈𒎉𒎊𒎋𒎌𒎍𒎎𒎏𒎐𒎑𒎒𒎓𒎔𒎕𒎖𒎗𒎘𒑣𒑤𒑥𒑦𒑧𒑨𒑩𒑪𒑫𒑬𒑭𒑮𖩀𖩁𖩂𖩃𖩄𖩅𖩆𖩇𖩈𖩉𖩊𖩋𖩌𖩍𖩎𖩏𖩐𖩑𖩒𖩓𖩔𖩕𖩖𖩗𖩘𖩙𖩚𖩛𖩜𖩝𖩞𖫐𖫑𖫒𖫓𖫔𖫕𖫖𖫗𖫘𖫙𖫚𖫛𖫜𖫝𖫞𖫟𖫠𖫡𖫢𖫣𖫤𖫥𖫦𖫧𖫨𖫩𖫪𖫫𖫬𖫭𖬀𖬁𖬂𖬃𖬄𖬅𖬆𖬇𖬈𖬉𖬊𖬋𖬌𖬍𖬎𖬏𖬐𖬑𖬒𖬓𖬔𖬕𖬖𖬗𖬘𖬙𖬚𖬛𖬜𖬝𖬞𖬟𖬠𖬡𖬢𖬣𖬤𖬥𖬦𖬧𖬨𖬩𖬪𖬫𖬬𖬭𖬮𖬯𖭀𖭁𖭂𖭃𖭣𖭤𖭥𖭦𖭧𖭨𖭩𖭪𖭫𖭬𖭭𖭮𖭯𖭰𖭱𖭲𖭳𖭴𖭵𖭶𖭷𖭽𖭾𖭿𖮀𖮁𖮂𖮃𖮄𖮅𖮆𖮇𖮈𖮉𖮊𖮋𖮌𖮍𖮎𖮏𛰀𛰁𛰂𛰃𛰄𛰅𛰆𛰇𛰈𛰉𛰊𛰋𛰌𛰍𛰎𛰏𛰐𛰑𛰒𛰓𛰔𛰕𛰖𛰗𛰘𛰙𛰚𛰛𛰜𛰝𛰞𛰟𛰠𛰡𛰢𛰣𛰤𛰥𛰦𛰧𛰨𛰩𛰪𛰫𛰬𛰭𛰮𛰯𛰰𛰱𛰲𛰳𛰴𛰵𛰶𛰷𛰸𛰹𛰺𛰻𛰼𛰽𛰾𛰿𛱀𛱁𛱂𛱃𛱄𛱅𛱆𛱇𛱈𛱉𛱊𛱋𛱌𛱍𛱎𛱏𛱐𛱑𛱒𛱓𛱔𛱕𛱖𛱗𛱘𛱙𛱚𛱛𛱜𛱝𛱞𛱟𛱠𛱡𛱢𛱣𛱤𛱥𛱦𛱧𛱨𛱩𛱪𛱰𛱱𛱲𛱳𛱴𛱵𛱶𛱷𛱸𛱹𛱺𛱻𛱼𛲀𛲁𛲂𛲃𛲄𛲅𛲆𛲇𛲈𛲐𛲑𛲒𛲓𛲔𛲕𛲖𛲗𛲘𛲙𞠀𞠁𞠂𞠃𞠄𞠅𞠆𞠇𞠈𞠉𞠊𞠋𞠌𞠍𞠎𞠏𞠐𞠑𞠒𞠓𞠔𞠕𞠖𞠗𞠘𞠙𞠚𞠛𞠜𞠝𞠞𞠟𞠠𞠡𞠢𞠣𞠤𞠥𞠦𞠧𞠨𞠩𞠪𞠫𞠬𞠭𞠮𞠯𞠰𞠱𞠲𞠳𞠴𞠵𞠶𞠷𞠸𞠹𞠺𞠻𞠼𞠽𞠾𞠿𞡀𞡁𞡂𞡃𞡄𞡅𞡆𞡇𞡈𞡉𞡊𞡋𞡌𞡍𞡎𞡏𞡐𞡑𞡒𞡓𞡔𞡕𞡖𞡗𞡘𞡙𞡚𞡛𞡜𞡝𞡞𞡟𞡠𞡡𞡢𞡣𞡤𞡥𞡦𞡧𞡨𞡩𞡪𞡫𞡬𞡭𞡮𞡯𞡰𞡱𞡲𞡳𞡴𞡵𞡶𞡷𞡸𞡹𞡺𞡻𞡼𞡽𞡾𞡿𞢀𞢁𞢂𞢃𞢄𞢅𞢆𞢇𞢈𞢉𞢊𞢋𞢌𞢍𞢎𞢏𞢐𞢑𞢒𞢓𞢔𞢕𞢖𞢗𞢘𞢙𞢚𞢛𞢜𞢝𞢞𞢟𞢠𞢡𞢢𞢣𞢤𞢥𞢦𞢧𞢨𞢩𞢪𞢫𞢬𞢭𞢮𞢯𞢰𞢱𞢲𞢳𞢴𞢵𞢶𞢷𞢸𞢹𞢺𞢻𞢼𞢽𞢾𞢿𞣀𞣁𞣂𞣃𞣄',
                start: 4,
                end: 3328,
                loc: {
                  start: {
                    line: 1,
                    column: 4
                  },
                  end: {
                    line: 1,
                    column: 3328
                  }
                }
              },
              start: 4,
              end: 3328,
              loc: {
                start: {
                  line: 1,
                  column: 4
                },
                end: {
                  line: 1,
                  column: 3328
                }
              }
            }
          ],
          start: 0,
          end: 3329,
          loc: {
            start: {
              line: 1,
              column: 0
            },
            end: {
              line: 1,
              column: 3329
            }
          }
        }
      ],
      start: 0,
      end: 3329,
      loc: {
        start: {
          line: 1,
          column: 0
        },
        end: {
          line: 1,
          column: 3329
        }
      }
    }
  ]
]);