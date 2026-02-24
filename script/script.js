let total = document.getElementById("total");
let interviewCount = document.getElementById("interviewCount");
let rejectedCount = document.getElementById("rejectedCount");
let currentStatus = 'all-filter-btn';

let interviewList = [];
let rejectedList = [];

const allcards = document.getElementById("all-job-cards");
const filteredSection = document.getElementById("filtered-section");
const jobCount = document.getElementById("jobCount");
const sectionJobCount = document.getElementById('secJobCount');

function countCalculator() {
    // counting total job cards and added the number to the total in head

    total.innerText = allcards.children.length;
    jobCount.innerText = allcards.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
}
countCalculator();

// Toggling throught All Interview and Rejected buttons
function toggleButtons(id) {
    currentStatus = id;
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

    if (id == "interview-filter-btn") {
        allcards.classList.add("hidden");
        filteredSection.classList.remove("hidden");
        renderInterviewSection();
    } else if (id == "all-filter-btn") {
        allcards.classList.remove("hidden");
        filteredSection.classList.add("hidden");
    } else if(id == "rejected-filter-btn"){
        allcards.classList.add("hidden");
        filteredSection.classList.remove("hidden");
        renderRejectSection();
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
        parentNode.querySelector(".jobStatus").innerHTML = `<p class="jobStatus "><span class="text-green-500 border rounded-sm py-2 px-3">INTERVIEW</span></p>`;
        if (!companyExist) {
            interviewList.push(cardInfo);
        }
        rejectedList = rejectedList.filter(item => item.companyName !=cardInfo.companyName)
        countCalculator();
        if(currentStatus == 'rejected-filter-btn'){
            renderRejectSection();
        }
    } else if (event.target.classList.contains("rejected-btn")) {
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

        const companyExist = rejectedList.find((item) => item.companyName == cardInfo.companyName);
        parentNode.querySelector(".jobStatus").innerHTML = `<p class="jobStatus "><span class="text-red-500 border rounded-sm py-2 px-3">REJECTED</span></p>`;
        if (!companyExist) {
            rejectedList.push(cardInfo);
        }
        interviewList = interviewList.filter(item => item.companyName !=cardInfo.companyName)
        if(currentStatus == 'interview-filter-btn'){
            renderInterviewSection();
        }
        countCalculator();
    }
});

function renderInterviewSection() {
    filteredSection.innerHTML = "";
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
        filteredSection.appendChild(div);
    }
}


function renderRejectSection() {
    filteredSection.innerHTML = "";
    for (item of rejectedList) {
        let div = document.createElement("div");
        div.className = "job-card p-6 flex justify-between bg-white rounded-xl shadow";
        div.innerHTML = `
        <div>
            <h2 class="companyName font-semibold text-xl mb-1">${item.companyName}</h2>
            <p class="jobTitle text-[#64748B]">${item.jobTitle}</p>
            <p class="jobtype text-gray-400 my-5">${item.jobtype}</p>
            <p class="jobStatus "><span class="text-red-500 border rounded-sm py-2 px-3">REJECTED</span></p>
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
        filteredSection.appendChild(div);
    }
}
