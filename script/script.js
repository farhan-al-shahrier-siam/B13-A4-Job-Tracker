let total = document.getElementById("total");
let interviewCount = document.getElementById("interviewCount");
let rejectedCount = document.getElementById("rejectedCount");

let interviewList = [];
let rejectedList = [];

const allcards = document.getElementById('all-job-cards');
const interviewFilteredSection = document.getElementById("interview-filtered-section");

function countCalculator() {
    // counting total job cards and added the number to the total in head
    
    total.innerText = allcards.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
}
countCalculator();

// Toggling throught All Interview and Rejected buttons
function toggleButtons(id) {
    // shob button gula dhorlam
    const allFilterBtn = document.getElementById("all-filter-btn");
    const interviewFilterBtn = document.getElementById("interview-filter-btn");
    const rejectedFilterBtn = document.getElementById("rejected-filter-btn");

    // same eta formate e button gula niye ashlam
    allFilterBtn.classList.remove("bg-primary", "text-white");
    interviewFilterBtn.classList.remove("bg-primary", "text-white");
    rejectedFilterBtn.classList.remove("bg-primary", "text-white");

    // selected btn tare change kore dilam
    const selectedBtn = document.getElementById(id);
    selectedBtn.classList.remove("bg-white");
    selectedBtn.classList.add("bg-primary", "text-white");

    if(id =='interview-filter-btn'){
        allcards.classList.add('hidden');
        interviewFilteredSection.classList.remove('hidden')
    } else if(id == 'all-filter-btn'){
        allcards.classList.remove('hidden');
        interviewFilteredSection.classList.add('hidden')
    }
}

const mainContainer = document.querySelector("main");

mainContainer.addEventListener("click", function (event) {
    if (event.target.classList.contains("interview-btn")) {
        const parentNode = event.target.parentNode.parentNode;
        const companyName = parentNode.querySelector(".companyName").innerText;
        const jobTitle = parentNode.querySelector(".jobTitle").innerText;
        const jobtype = parentNode.querySelector(".jobtype").innerText;
        const jobStatus = parentNode.querySelector(".jobStatus").innerText;
        const jobDescription = parentNode.querySelector(".jobDescription").innerText;

        const cardInfo = {
            companyName,
            jobTitle,
            jobtype,
            jobStatus,
            jobDescription,
        };

        const companyExist = interviewList.find((item) => item.companyName == cardInfo.companyName);
        parentNode.querySelector(".jobStatus").innerHTML= `<p class="jobStatus "><span class="text-green-500 border rounded-sm py-2 px-3">INTERVIEW</span></p>`;
        if (!companyExist) {
            interviewList.push(cardInfo);
        }
        countCalculator();
        renderInterviewSection();
    }
    
});

function renderInterviewSection() {
    interviewFilteredSection.innerHTML = "";
    for (item of interviewList) {
        let div = document.createElement("div");
        div.className = "job-card p-6 flex justify-between bg-white rounded-xl shadow";
        div.innerHTML = `
        <div>
            <h2 class="companyName font-semibold text-xl mb-1">${item.companyName}</h2>
            <p class="jobTitle text-[#64748B]">${item.jobTitle}</p>
            <p class="jobtype text-gray-400 my-5">${item.jobtype}</p>
            <p class="jobStatus "><span class="text-green-500 border rounded-sm py-2 px-3">INTERVIEW</span></p>
            <p class="jobDescription text-gray-600 mt-3">${item.jobDescription}</p>
            <div class="mt-5 flex gap-3">
                <button class="cursor-pointer interview-btn text-green-500 py-2 px-3 border rounded-sm">INTERVIEW</button>
                <button class="cursor-pointer rejected-btn text-red-500 py-2 px-3 border rounded-sm">REJECTED</button>
            </div>

        </div>
        <div>
            <button class="btn-delete cursor-pointer p-1 border rounded-sm"><i class="fa-solid fa-trash-can"></i></button>
        </div>
        `;
        interviewFilteredSection.appendChild(div);
    }
}
