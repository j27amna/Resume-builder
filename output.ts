document.addEventListener("DOMContentLoaded" , () => {
    function validateForm () {
        const form = document.getElementById("resumeForm") as HTMLFormElement;
        if (! form.checkValidity){
            alert("Oops! Looks like you haven't filled the form correctly.")
            return false;
        }
       else {return true;}
    }

    function generateResume () {
        const name = (document.getElementById("name") as HTMLInputElement).value;
        const email = (document.getElementById("email") as HTMLInputElement).value;
        const phone = (document.getElementById("phone") as HTMLInputElement).value;
        const image = (document.getElementById("image") as HTMLInputElement).files?.[0];
        const address = (document.getElementById("address") as HTMLInputElement).value;
        const post = (document.getElementById("post") as HTMLInputElement).value;
        const yourself = (document.getElementById("yourself") as HTMLTextAreaElement).value;
        const institute = (document.getElementById("institute") as HTMLInputElement).value;
        const education = (document.getElementById("education") as HTMLTextAreaElement).value;
        const startDate = (document.getElementById("startDate") as HTMLInputElement).value;
        const endDate = (document.getElementById("endDate") as HTMLInputElement).value;
        const company = (document.getElementById("company") as HTMLInputElement).value;
        const job = (document.getElementById("job") as HTMLInputElement).value;
        const workStart = (document.getElementById("workStart") as HTMLInputElement).value;
        const workEnd = (document.getElementById("workEnd") as HTMLInputElement).value;
        const experience = (document.getElementById("experience") as HTMLInputElement).value;
        const experience1 = (document.getElementById("experience1") as HTMLInputElement).value;
        const experience2 = (document.getElementById("experience2") as HTMLInputElement).value;
        const skill = (document.getElementById("skill") as HTMLInputElement).value;
        const skill1 = (document.getElementById("skill1") as HTMLInputElement).value;
        const skill2 = (document.getElementById("skill2") as HTMLInputElement).value;

        if (image) {
            const reader = new FileReader();
            reader.onload = function (e) {
                (document.getElementById("displayImage") as HTMLImageElement).src = e.target?.result as string;
            };
            reader.readAsDataURL(image)
        }
        (document.getElementById("displayName") as HTMLElement).innerText = name;
        (document.getElementById("displayAddress") as HTMLElement).innerText = address;
        (document.getElementById("displayPhone") as HTMLElement).innerText = phone;
        (document.getElementById("displayEmail") as HTMLElement).innerText = email;
        (document.getElementById("displayDesignation") as HTMLElement).innerText = post;
        (document.getElementById("displaySummary") as HTMLElement).innerText = yourself;
        (document.getElementById("displayCompany") as HTMLElement).innerText = company;
        (document.getElementById("displayJob") as HTMLElement).innerText = job;
        (document.getElementById("displayWorkStart") as HTMLElement).innerText = workStart;
        (document.getElementById("displayWorkEnd") as HTMLElement).innerText = workEnd;
        (document.getElementById("displayExperience") as HTMLElement).innerText = experience;
        (document.getElementById("displayExperience1") as HTMLElement).innerText = experience1;
        (document.getElementById("displayExperience2") as HTMLElement).innerText = experience2;
        (document.getElementById("displayInstitute") as HTMLElement).innerText = institute;
        (document.getElementById("displayEducation") as HTMLElement).innerText = education;
        (document.getElementById("displayEduStart") as HTMLElement).innerText = startDate;
        (document.getElementById("displayEduEnd") as HTMLElement).innerText = endDate;
        (document.getElementById("displaySkill") as HTMLElement).innerText = skill;
        (document.getElementById("displaySkill1") as HTMLElement).innerText = skill1;
        (document.getElementById("displaySkill2") as HTMLElement).innerText = skill2;
    }

    document.getElementById("resumeForm")?.addEventListener("submit" , function (event) {
        event.preventDefault();
        if (validateForm() ) {
            generateResume();
        }
    })

    document.getElementById("image")?.addEventListener("input" , generateResume);
    document.getElementById("name")?.addEventListener("input" , generateResume);
    document.getElementById("address")?.addEventListener("input" , generateResume);
    document.getElementById("phone")?.addEventListener("input" , generateResume);
    document.getElementById("email")?.addEventListener("input" , generateResume);
    document.getElementById("post")?.addEventListener("input" , generateResume);
    document.getElementById("yourself")?.addEventListener("input" , generateResume);
    document.getElementById("company")?.addEventListener("input" , generateResume);
    document.getElementById("job")?.addEventListener("input" , generateResume);
    document.getElementById("workStart")?.addEventListener("input" , generateResume);
    document.getElementById("workEnd")?.addEventListener("input" , generateResume);
    document.getElementById("experience")?.addEventListener("input" , generateResume);
    document.getElementById("experience1")?.addEventListener("input" , generateResume);
    document.getElementById("experience2")?.addEventListener("input" , generateResume);
    document.getElementById("institute")?.addEventListener("input" , generateResume);
    document.getElementById("education")?.addEventListener("input" , generateResume);
    document.getElementById("startDate")?.addEventListener("input" , generateResume);
    document.getElementById("endDate")?.addEventListener("input" , generateResume);
    document.getElementById("skill")?.addEventListener("input" , generateResume);
    document.getElementById("skill1")?.addEventListener("input" , generateResume);
    document.getElementById("skill2")?.addEventListener("input" , generateResume);
})

const shareablelink = document.getElementById("shareable-link") as HTMLAnchorElement
shareableLink?.addEventListener("click", () => {

})

const downloadpdf = document.getElementById("downloadpdf") as HTMLButtonElement
downloadPdf?.addEventListener("click", () => {
    window.print()
})