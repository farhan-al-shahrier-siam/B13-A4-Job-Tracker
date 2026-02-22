let total = document.getElementById("total");
let interviewCount = document.getElementById("interviewCount");
let rejectedCount = document.getElementById("rejectedCount");

let interviewList = [];
let rejectedList = [];

function countCalculator (){
    // counting total job cards and added the number to the total in head
    const allcards = document.getElementById("all-job-cards").children.length;
    total.innerText = allcards;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
}
countCalculator();

// Toggling throught All Interview and Rejected buttons
function toggleButtons(id){

    // shob button gula dhorlam
    const allFilterBtn = document.getElementById("all-filter-btn");
    const interviewFilterBtn = document.getElementById("interview-filter-btn");
    const rejectedFilterBtn = document.getElementById("rejected-filter-btn");

    // same eta formate e button gula niye ashlam
    allFilterBtn.classList.remove('bg-primary', 'text-white');
    interviewFilterBtn.classList.remove('bg-primary', 'text-white');
    rejectedFilterBtn.classList.remove('bg-primary', 'text-white');

    // selected btn tare change kore dilam
    const selectedBtn = document.getElementById(id);
    selectedBtn.classList.remove('bg-white')
    selectedBtn.classList.add('bg-primary', 'text-white')

}