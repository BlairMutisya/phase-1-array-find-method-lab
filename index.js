// code your solution here
function superbowlWin(superbowlRecords) {
    // Use the find() method to search for a record with the result "W"
    const winningRecord = superbowlRecords.find(record => record.result === "W");
  
    // If a winning record is found, return the year of the win
    if (winningRecord) {
      return winningRecord.year;
    } else {
      // If no winning record is found, return undefined
      return undefined;
    }
  }
  