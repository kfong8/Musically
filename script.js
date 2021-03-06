var sheetMusicQuestions = [
    //[source, id number, note, octave, level of difficulty]
    ["Resources/Normal/4/4c.png", "0", "C", 4, "beginner"],
    ["Resources/Normal/4/4d.png", "1", "D", 4, "beginner"],
    ["Resources/Normal/4/4e.png", "2", "E", 4, "beginner"],
    ["Resources/Normal/4/4f.png", "3", "F", 4, "beginner"],
    ["Resources/Normal/4/4g.png", "4", "G", 4, "beginner"],
    ["Resources/Normal/4/4a.png", "5", "A", 4, "beginner"],
    ["Resources/Normal/4/4b.png", "6", "B", 4, "beginner"],    
    ["Resources/Normal/3/3c.png", "7", "C", 3, "beginner"],
    ["Resources/Normal/3/3d.png", "8", "D", 3, "beginner"],
    ["Resources/Normal/3/3e.png", "9", "E", 3, "beginner"],
    ["Resources/Normal/3/3f.png", "10", "F", 3, "beginner"],
    ["Resources/Normal/3/3g.png", "11", "G", 3, "beginner"],
    ["Resources/Normal/3/3a.png", "12", "A", 3, "beginner"],
    ["Resources/Normal/3/3b.png", "13", "B", 3, "beginner"],
    ["Resources/Normal/5/5c.png", "14", "C", 5, "beginner"],
    ["Resources/Normal/5/5d.png", "15", "D", 5, "beginner"],
    ["Resources/Normal/5/5e.png", "16", "E", 5, "beginner"],
    ["Resources/Normal/5/5f.png", "17", "F", 5, "beginner"],
    ["Resources/Normal/5/5g.png", "18", "G", 5, "beginner"],
    ["Resources/Normal/5/5a.png", "19", "A", 5, "beginner"],
    ["Resources/Normal/5/5b.png", "20", "B", 5, "beginner"],
    ["Resources/Normal/2/2c.png", "21", "C", 2, "beginner"],
    ["Resources/Normal/2/2d.png", "22", "D", 2, "beginner"],
    ["Resources/Normal/2/2e.png", "23", "E", 2, "beginner"],
    ["Resources/Normal/2/2f.png", "24", "F", 2, "beginner"],
    ["Resources/Normal/2/2g.png", "25", "G", 2, "beginner"],
    ["Resources/Normal/2/2a.png", "26", "A", 2, "beginner"],
    ["Resources/Normal/2/2b.png", "27", "B", 2, "beginner"],
    ["Resources/Normal/6/6c.png", "28", "C", 6, "beginner"],
    ["Resources/Normal/6/6d.png", "29", "D", 6, "beginner"],
    ["Resources/Normal/6/6e.png", "30", "E", 6, "beginner"],
    ["Resources/Normal/6/6f.png", "31", "F", 6, "beginner"],
    ["Resources/Normal/6/6g.png", "32", "G", 6, "beginner"],
    ["Resources/Normal/6/6a.png", "33", "A", 6, "beginner"],
    ["Resources/Normal/6/6b.png", "34", "B", 6, "beginner"],
    ["Resources/Normal/1/1c.png", "35", "C", 1, "intermediate"],
    ["Resources/Normal/1/1d.png", "36", "D", 1, "intermediate"],
    ["Resources/Normal/1/1e.png", "37", "E", 1, "intermediate"],
    ["Resources/Normal/1/1f.png", "38", "F", 1, "intermediate"],
    ["Resources/Normal/1/1g.png", "39", "G", 1, "intermediate"],
    ["Resources/Normal/1/1a.png", "40", "A", 1, "intermediate"],
    ["Resources/Normal/1/1b.png", "41", "B", 1, "intermediate"],
    ["Resources/Normal/7/7c.png", "42", "C", 7, "intermediate"],
    ["Resources/Normal/7/7d.png", "43", "D", 7, "intermediate"],
    ["Resources/Normal/7/7e.png", "44", "E", 7, "intermediate"],
    ["Resources/Normal/7/7f.png", "45", "F", 7, "intermediate"],
    ["Resources/Normal/7/7g.png", "46", "G", 7, "intermediate"],
    ["Resources/Normal/7/7a.png", "47", "A", 7, "intermediate"],
    ["Resources/Normal/7/7b.png", "48", "B", 7, "intermediate"],
    ["Resources/Flat/1/1d.png", "49", "Db", 1, "advanced"],
    ["Resources/Flat/1/1e.png", "50", "Eb", 1, "advanced"],
    ["Resources/Flat/1/1g.png", "51", "Gb", 1, "advanced"],
    ["Resources/Flat/1/1a.png", "52", "Ab", 1, "advanced"],
    ["Resources/Flat/1/1b.png", "53", "Bb", 1, "advanced"],
    ["Resources/Flat/2/2d.png", "54", "Db", 2, "advanced"],
    ["Resources/Flat/2/2e.png", "55", "Eb", 2, "advanced"],
    ["Resources/Flat/2/2g.png", "56", "Gb", 2, "advanced"],
    ["Resources/Flat/2/2a.png", "57", "Ab", 2, "advanced"],
    ["Resources/Flat/2/2b.png", "58", "Bb", 2, "advanced"],
    ["Resources/Flat/3/3d.png", "59", "Db", 3, "advanced"],
    ["Resources/Flat/3/3e.png", "60", "Eb", 3, "advanced"],
    ["Resources/Flat/3/3g.png", "61", "Gb", 3, "advanced"],
    ["Resources/Flat/3/3a.png", "62", "Ab", 3, "advanced"],
    ["Resources/Flat/3/3b.png", "63", "Bb", 3, "advanced"],
    ["Resources/Flat/4/4d.png", "64", "Db", 4, "advanced"],
    ["Resources/Flat/4/4e.png", "65", "Eb", 4, "advanced"],
    ["Resources/Flat/4/4g.png", "66", "Gb", 4, "advanced"],
    ["Resources/Flat/4/4a.png", "67", "Ab", 4, "advanced"],
    ["Resources/Flat/4/4b.png", "68", "Bb", 4, "advanced"],
    ["Resources/Flat/5/5d.png", "69", "Db", 5, "advanced"],
    ["Resources/Flat/5/5e.png", "70", "Eb", 5, "advanced"],
    ["Resources/Flat/5/5g.png", "71", "Gb", 5, "advanced"],
    ["Resources/Flat/5/5a.png", "72", "Ab", 5, "advanced"],
    ["Resources/Flat/5/5b.png", "73", "Bb", 5, "advanced"],
    ["Resources/Flat/6/6d.png", "74", "Db", 6, "advanced"],
    ["Resources/Flat/6/6e.png", "75", "Eb", 6, "advanced"],
    ["Resources/Flat/6/6g.png", "76", "Gb", 6, "advanced"],
    ["Resources/Flat/6/6a.png", "77", "Ab", 6, "advanced"],
    ["Resources/Flat/6/6b.png", "78", "Bb", 6, "advanced"],
    ["Resources/Flat/7/7d.png", "79", "Db", 7, "advanced"],
    ["Resources/Flat/7/7e.png", "80", "Eb", 7, "advanced"],
    ["Resources/Flat/7/7g.png", "81", "Gb", 7, "advanced"],
    ["Resources/Flat/7/7a.png", "82", "Ab", 7, "advanced"],
    ["Resources/Flat/7/7b.png", "83", "Bb", 7, "advanced"],
    ["Resources/Sharp/1/1c.png", "84", "Db", 1, "advanced"],
    ["Resources/Sharp/1/1d.png", "85", "Eb", 1, "advanced"],
    ["Resources/Sharp/1/1f.png", "86", "Gb", 1, "advanced"],
    ["Resources/Sharp/1/1g.png", "87", "Ab", 1, "advanced"],
    ["Resources/Sharp/1/1a.png", "88", "Bb", 1, "advanced"],
    ["Resources/Sharp/2/2c.png", "89", "Db", 2, "advanced"],
    ["Resources/Sharp/2/2d.png", "90", "Eb", 2, "advanced"],
    ["Resources/Sharp/2/2f.png", "91", "Gb", 2, "advanced"],
    ["Resources/Sharp/2/2g.png", "92", "Ab", 2, "advanced"],
    ["Resources/Sharp/2/2a.png", "93", "Bb", 2, "advanced"],
    ["Resources/Sharp/3/3c.png", "94", "Db", 3, "advanced"],
    ["Resources/Sharp/3/3d.png", "95", "Eb", 3, "advanced"],
    ["Resources/Sharp/3/3f.png", "96", "Gb", 3, "advanced"],
    ["Resources/Sharp/3/3g.png", "97", "Ab", 3, "advanced"],
    ["Resources/Sharp/3/3a.png", "98", "Bb", 3, "advanced"],
    ["Resources/Sharp/4/4c.png", "99", "Db", 4, "advanced"],
    ["Resources/Sharp/4/4d.png", "100", "Eb", 4, "advanced"],
    ["Resources/Sharp/4/4f.png", "101", "Gb", 4, "advanced"],
    ["Resources/Sharp/4/4g.png", "102", "Ab", 4, "advanced"],
    ["Resources/Sharp/4/4a.png", "103", "Bb", 4, "advanced"],
    ["Resources/Sharp/5/5c.png", "104", "Db", 5, "advanced"],
    ["Resources/Sharp/5/5d.png", "105", "Eb", 5, "advanced"],
    ["Resources/Sharp/5/5f.png", "106", "Gb", 5, "advanced"],
    ["Resources/Sharp/5/5g.png", "107", "Ab", 5, "advanced"],
    ["Resources/Sharp/5/5a.png", "108", "Bb", 5, "advanced"],
    ["Resources/Sharp/6/6c.png", "109", "Db", 6, "advanced"],
    ["Resources/Sharp/6/6d.png", "110", "Eb", 6, "advanced"],
    ["Resources/Sharp/6/6f.png", "111", "Gb", 6, "advanced"],
    ["Resources/Sharp/6/6g.png", "112", "Ab", 6, "advanced"],
    ["Resources/Sharp/6/6a.png", "113", "Bb", 6, "advanced"],
    ["Resources/Sharp/7/7c.png", "114", "Db", 7, "advanced"],
    ["Resources/Sharp/7/7d.png", "115", "Eb", 7, "advanced"],
    ["Resources/Sharp/7/7f.png", "116", "Gb", 7, "advanced"],
    ["Resources/Sharp/7/7g.png", "117", "Ab", 7, "advanced"],
    ["Resources/Sharp/7/7a.png", "118", "Bb", 7, "advanced"],
]

var earTrainingQuestions = [
    //[source, id number, note, octave, level of difficulty]
    ["Resources/c4.mp3", "0", "C", 4, "beginner"],
    ["Resources/d4.mp3", "1", "D", 4, "beginner"],
    ["Resources/e4.mp3", "2", "E", 4, "beginner"],
    ["Resources/f4.mp3", "3", "F", 4, "beginner"],
    ["Resources/g4.mp3", "4", "G", 4, "beginner"],
    ["Resources/a4.mp3", "5", "A", 4, "beginner"],
    ["Resources/b4.mp3", "6", "B", 4, "beginner"],
    ["Resources/c1.mp3", "7", "C", 1, "beginner"],
    ["Resources/d1.mp3", "8", "D", 1, "beginner"],
    ["Resources/e1.mp3", "9", "E", 1, "beginner"],
    ["Resources/f1.mp3", "10", "F", 1, "beginner"],
    ["Resources/g1.mp3", "11", "G", 1, "beginner"],
    ["Resources/a1.mp3", "12", "A", 1, "beginner"],
    ["Resources/b1.mp3", "13", "B", 1, "beginner"],
    ["Resources/c7.mp3", "14", "C", 7, "beginner"],
    ["Resources/d7.mp3", "15", "D", 7, "beginner"],
    ["Resources/e7.mp3", "16", "E", 7, "beginner"],
    ["Resources/f7.mp3", "17", "F", 7, "beginner"],
    ["Resources/g7.mp3", "18", "G", 7, "beginner"],
    ["Resources/a7.mp3", "19", "A", 7, "beginner"],
    ["Resources/b7.mp3", "20", "B", 7, "beginner"],
    ["Resources/c3.mp3", "21", "C", 3, "intermediate"],
    ["Resources/d3.mp3", "22", "D", 3, "intermediate"],
    ["Resources/e3.mp3", "23", "E", 3, "intermediate"],
    ["Resources/f3.mp3", "24", "F", 3, "intermediate"],
    ["Resources/g3.mp3", "25", "G", 3, "intermediate"],
    ["Resources/a3.mp3", "26", "A", 3, "intermediate"],
    ["Resources/b3.mp3", "27", "B", 3, "intermediate"],
    ["Resources/c5.mp3", "28", "C", 5, "intermediate"],
    ["Resources/d5.mp3", "29", "D", 5, "intermediate"],
    ["Resources/e5.mp3", "30", "E", 5, "intermediate"],
    ["Resources/f5.mp3", "31", "F", 5, "intermediate"],
    ["Resources/g5.mp3", "32", "G", 5, "intermediate"],
    ["Resources/a5.mp3", "33", "A", 5, "intermediate"],
    ["Resources/b5.mp3", "34", "B", 5, "intermediate"],    
    ["Resources/c2.mp3", "35", "C", 2, "intermediate"],
    ["Resources/d2.mp3", "36", "D", 2, "intermediate"],
    ["Resources/e2.mp3", "37", "E", 2, "intermediate"],
    ["Resources/f2.mp3", "38", "F", 2, "intermediate"],
    ["Resources/g2.mp3", "39", "G", 2, "intermediate"],
    ["Resources/a2.mp3", "40", "A", 2, "intermediate"],
    ["Resources/b2.mp3", "41", "B", 2, "intermediate"],
    ["Resources/c6.mp3", "42", "C", 6, "intermediate"],
    ["Resources/d6.mp3", "43", "D", 6, "intermediate"],
    ["Resources/e6.mp3", "44", "E", 6, "intermediate"],
    ["Resources/f6.mp3", "45", "F", 6, "intermediate"],
    ["Resources/g6.mp3", "46", "G", 6, "intermediate"],
    ["Resources/a6.mp3", "47", "A", 6, "intermediate"],
    ["Resources/b6.mp3", "48", "B", 6, "intermediate"],
    ["Resources/db1.mp3", "49", "Db", 1, "advanced"],
    ["Resources/eb1.mp3", "50", "Eb", 1, "advanced"],
    ["Resources/gb1.mp3", "51", "Gb", 1, "advanced"],
    ["Resources/ab1.mp3", "52", "Ab", 1, "advanced"],
    ["Resources/bb1.mp3", "53", "Bb", 1, "advanced"],
    ["Resources/db2.mp3", "54", "Db", 2, "advanced"],
    ["Resources/eb2.mp3", "55", "Eb", 2, "advanced"],
    ["Resources/gb2.mp3", "56", "Gb", 2, "advanced"],
    ["Resources/ab2.mp3", "57", "Ab", 2, "advanced"],
    ["Resources/bb2.mp3", "58", "Bb", 2, "advanced"],
    ["Resources/db3.mp3", "59", "Db", 3, "advanced"],
    ["Resources/eb3.mp3", "60", "Eb", 3, "advanced"],
    ["Resources/gb3.mp3", "61", "Gb", 3, "advanced"],
    ["Resources/ab3.mp3", "62", "Ab", 3, "advanced"],
    ["Resources/bb3.mp3", "63", "Bb", 3, "advanced"],
    ["Resources/db4.mp3", "64", "Db", 4, "advanced"],
    ["Resources/eb4.mp3", "65", "Eb", 4, "advanced"],
    ["Resources/gb4.mp3", "66", "Gb", 4, "advanced"],
    ["Resources/ab4.mp3", "67", "Ab", 4, "advanced"],
    ["Resources/bb4.mp3", "68", "Bb", 4, "advanced"],
    ["Resources/db5.mp3", "69", "Db", 5, "advanced"],
    ["Resources/eb5.mp3", "70", "Eb", 5, "advanced"],
    ["Resources/gb5.mp3", "71", "Gb", 5, "advanced"],
    ["Resources/ab5.mp3", "72", "Ab", 5, "advanced"],
    ["Resources/bb5.mp3", "73", "Bb", 5, "advanced"],
    ["Resources/db6.mp3", "74", "Db", 6, "advanced"],
    ["Resources/eb6.mp3", "75", "Eb", 6, "advanced"],
    ["Resources/gb6.mp3", "76", "Gb", 6, "advanced"],
    ["Resources/ab6.mp3", "77", "Ab", 6, "advanced"],
    ["Resources/bb6.mp3", "78", "Bb", 6, "advanced"],
    ["Resources/db7.mp3", "79", "Db", 7, "advanced"],
    ["Resources/eb7.mp3", "80", "Eb", 7, "advanced"],
    ["Resources/gb7.mp3", "81", "Gb", 7, "advanced"],
    ["Resources/ab7.mp3", "82", "Ab", 7, "advanced"],
    ["Resources/bb7.mp3", "83", "Bb", 7, "advanced"],
]

var noteSounds = [
    ["Resources/c1.mp3", "Resources/c2.mp3", "Resources/c3.mp3", "Resources/c4.mp3", "Resources/c5.mp3", "Resources/c6.mp3", "Resources/c7.mp3"],
    ["Resources/db1.mp3", "Resources/db2.mp3", "Resources/db3.mp3", "Resources/db4.mp3", "Resources/db5.mp3", "Resources/db6.mp3", "Resources/db7.mp3"],
    ["Resources/d1.mp3", "Resources/d2.mp3", "Resources/d3.mp3", "Resources/d4.mp3", "Resources/d5.mp3", "Resources/d6.mp3", "Resources/d7.mp3"],
    ["Resources/eb1.mp3", "Resources/eb2.mp3", "Resources/eb3.mp3", "Resources/eb4.mp3", "Resources/eb5.mp3", "Resources/eb6.mp3", "Resources/eb7.mp3"],
    ["Resources/e1.mp3", "Resources/e2.mp3", "Resources/e3.mp3", "Resources/e4.mp3", "Resources/e5.mp3", "Resources/e6.mp3", "Resources/e7.mp3"],
    ["Resources/f1.mp3", "Resources/f2.mp3", "Resources/f3.mp3", "Resources/f4.mp3", "Resources/f5.mp3", "Resources/f6.mp3", "Resources/f7.mp3"],
    ["Resources/gb1.mp3", "Resources/gb2.mp3", "Resources/gb3.mp3", "Resources/gb4.mp3", "Resources/gb5.mp3", "Resources/gb6.mp3", "Resources/gb7.mp3"],
    ["Resources/g1.mp3", "Resources/g2.mp3", "Resources/g3.mp3", "Resources/g4.mp3", "Resources/g5.mp3", "Resources/g6.mp3", "Resources/g7.mp3"],
    ["Resources/ab1.mp3", "Resources/ab2.mp3", "Resources/ab3.mp3", "Resources/ab4.mp3", "Resources/ab5.mp3", "Resources/ab6.mp3", "Resources/ab7.mp3"],
    ["Resources/a1.mp3", "Resources/a2.mp3", "Resources/a3.mp3", "Resources/a4.mp3", "Resources/a5.mp3", "Resources/a6.mp3", "Resources/a7.mp3"],
    ["Resources/bb1.mp3", "Resources/bb2.mp3", "Resources/bb3.mp3", "Resources/bb4.mp3", "Resources/bb5.mp3", "Resources/bb6.mp3", "Resources/bb7.mp3"],
    ["Resources/b1.mp3", "Resources/b2.mp3", "Resources/b3.mp3", "Resources/b4.mp3", "Resources/b5.mp3", "Resources/b6.mp3", "Resources/b7.mp3"],    
]