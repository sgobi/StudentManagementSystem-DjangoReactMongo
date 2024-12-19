import axios from 'axios';

export function getMarks() {
    return axios.get('http://127.0.0.1:8000/marks/')
      .then(response => response.data)
  }

  // export function addMarks() {
  //   return axios.get('http://127.0.0.1:8000/marks/')
  //     .then(response => response.data)
  // }

  export function deleteMarks(marksId) {
    return axios.delete('http://127.0.0.1:8000/marks/' + marksId + '/', {
     method: 'DELETE',
     headers: {
       'Accept':'application/json',
       'Content-Type':'application/json'
     }
    })
    .then(response => response.data)
  }

//   export function addMarks(marks)
//   {
//     return.axios.post(
// 'http://127.0.0.1:8000/marks/'
//       ,{
//     marksId:null,
//     studentId:marks.studentId.value,
//     Course marks.studentId.value,
//     Marks = models.CharField(max_length=2)
//   }    ),then(response=>response.data)
//   }