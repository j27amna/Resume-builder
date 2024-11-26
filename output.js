document.addEventListener("DOMContentLoaded", function () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
    function validateForm() {
        var form = document.getElementById("resumeForm");
        if (!form.checkValidity) {
            alert("Oops! Looks like you haven't filled the form correctly.");
            return false;
        }
        else {
            return true;
        }
    }
    function generateResume() {
        var _a;
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var image = (_a = document.getElementById("image").files) === null || _a === void 0 ? void 0 : _a[0];
        var address = document.getElementById("address").value;
        var post = document.getElementById("post").value;
        var yourself = document.getElementById("yourself").value;
        var institute = document.getElementById("institute").value;
        var education = document.getElementById("education").value;
        var startDate = document.getElementById("startDate").value;
        var endDate = document.getElementById("endDate").value;
        var company = document.getElementById("company").value;
        var job = document.getElementById("job").value;
        var workStart = document.getElementById("workStart").value;
        var workEnd = document.getElementById("workEnd").value;
        var experience = document.getElementById("experience").value;
        var experience1 = document.getElementById("experience1").value;
        var experience2 = document.getElementById("experience2").value;
        var skill = document.getElementById("skill").value;
        var skill1 = document.getElementById("skill1").value;
        var skill2 = document.getElementById("skill2").value;
        if (image) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var _a;
                document.getElementById("displayImage").src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
            };
            reader.readAsDataURL(image);
        }
        document.getElementById("displayName").innerText = name;
        document.getElementById("displayAddress").innerText = address;
        document.getElementById("displayPhone").innerText = phone;
        document.getElementById("displayEmail").innerText = email;
        document.getElementById("displayDesignation").innerText = post;
        document.getElementById("displaySummary").innerText = yourself;
        document.getElementById("displayCompany").innerText = company;
        document.getElementById("displayJob").innerText = job;
        document.getElementById("displayWorkStart").innerText = workStart;
        document.getElementById("displayWorkEnd").innerText = workEnd;
        document.getElementById("displayExperience").innerText = experience;
        document.getElementById("displayExperience1").innerText = experience1;
        document.getElementById("displayExperience2").innerText = experience2;
        document.getElementById("displayInstitute").innerText = institute;
        document.getElementById("displayEducation").innerText = education;
        document.getElementById("displayEduStart").innerText = startDate;
        document.getElementById("displayEduEnd").innerText = endDate;
        document.getElementById("displaySkill").innerText = skill;
        document.getElementById("displaySkill1").innerText = skill1;
        document.getElementById("displaySkill2").innerText = skill2;
    }
    (_a = document.getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
        event.preventDefault();
        if (validateForm()) {
            generateResume();
        }
    });
    (_b = document.getElementById("image")) === null || _b === void 0 ? void 0 : _b.addEventListener("input", generateResume);
    (_c = document.getElementById("name")) === null || _c === void 0 ? void 0 : _c.addEventListener("input", generateResume);
    (_d = document.getElementById("address")) === null || _d === void 0 ? void 0 : _d.addEventListener("input", generateResume);
    (_e = document.getElementById("phone")) === null || _e === void 0 ? void 0 : _e.addEventListener("input", generateResume);
    (_f = document.getElementById("email")) === null || _f === void 0 ? void 0 : _f.addEventListener("input", generateResume);
    (_g = document.getElementById("post")) === null || _g === void 0 ? void 0 : _g.addEventListener("input", generateResume);
    (_h = document.getElementById("yourself")) === null || _h === void 0 ? void 0 : _h.addEventListener("input", generateResume);
    (_j = document.getElementById("company")) === null || _j === void 0 ? void 0 : _j.addEventListener("input", generateResume);
    (_k = document.getElementById("job")) === null || _k === void 0 ? void 0 : _k.addEventListener("input", generateResume);
    (_l = document.getElementById("workStart")) === null || _l === void 0 ? void 0 : _l.addEventListener("input", generateResume);
    (_m = document.getElementById("workEnd")) === null || _m === void 0 ? void 0 : _m.addEventListener("input", generateResume);
    (_o = document.getElementById("experience")) === null || _o === void 0 ? void 0 : _o.addEventListener("input", generateResume);
    (_p = document.getElementById("experience1")) === null || _p === void 0 ? void 0 : _p.addEventListener("input", generateResume);
    (_q = document.getElementById("experience2")) === null || _q === void 0 ? void 0 : _q.addEventListener("input", generateResume);
    (_r = document.getElementById("institute")) === null || _r === void 0 ? void 0 : _r.addEventListener("input", generateResume);
    (_s = document.getElementById("education")) === null || _s === void 0 ? void 0 : _s.addEventListener("input", generateResume);
    (_t = document.getElementById("startDate")) === null || _t === void 0 ? void 0 : _t.addEventListener("input", generateResume);
    (_u = document.getElementById("endDate")) === null || _u === void 0 ? void 0 : _u.addEventListener("input", generateResume);
    (_v = document.getElementById("skill")) === null || _v === void 0 ? void 0 : _v.addEventListener("input", generateResume);
    (_w = document.getElementById("skill1")) === null || _w === void 0 ? void 0 : _w.addEventListener("input", generateResume);
    (_x = document.getElementById("skill2")) === null || _x === void 0 ? void 0 : _x.addEventListener("input", generateResume);
});
var shareableLink = document.getElementById("shareable-link");
shareableLink === null || shareableLink === void 0 ? void 0 : shareableLink.addEventListener("click", function () {
});
var downloadPdf = document.getElementById("downloadpdf");
downloadPdf === null || downloadPdf === void 0 ? void 0 : downloadPdf.addEventListener("click", function () {
    window.print();
});
