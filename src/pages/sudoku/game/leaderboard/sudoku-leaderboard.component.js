// import React, { Component } from 'react';

// class SudokuLeaderboardComponent extends Component {
//   render() {
//     return (
//         {% if leaderboard %}
//         <div id="leaderboard_parent" class="col left-right-padding-5">
//             <div id="leaderboard">
//                 <table class="table table-striped">
//                     <thead>
//                         <tr>
//                           <th scope="col">#</th>
//                           <th scope="col">Date</th>
//                           <th scope="col">Name</th>
//                           <th scope="col">Time</th>
//                         </tr>
//                     </thead>
//                     {% for date, who, seconds in leaderboard %}
//                     <tr>
//                         <td>{{ forloop.counter }}</td>
//                         <td>{{ date|date_to_word }}</td>
//                         <td>{{ who }}</td>
//                         <td>{{ seconds|seconds_to_time }}</td>
//                     </tr>
//                     {% endfor %}
//                 </table>
//             </div>
//         </div>
//         {% endif %}
//     );
//   }
// }

// export default SudokuLeaderboardComponent;
