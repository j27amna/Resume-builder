$(document).ready(function() {
    
    $('.content').repeater({
        initEmpty: false,
        defaultValues: {
            'text-input': " "
        },

        show: function() {
            $(this).slideDown();
        },
        hide: function(deleteElement) {
            $(this).slideUp(deleteElement);
        },

    });

    $('.repeaterbtn').on('click', function() {
        $('.content').repeater('insert');
    });

    $(document).on('click', '.remove', function() {
        $(this).closest('.content-section').repeater('remove');
    });
});

$(document).ready(function() {
    // Initialize the repeater for work experience
    $('#workExperienceRepeater').repeater({
        show: function() {
            $(this).slideDown();
        },
        hide: function(deleteElement) {
            $(this).slideUp(deleteElement);
        }
    });

    // Add work experience button functionality
    $('#addWorkExperienceButton').on('click', function() {
        $('#workExperienceRepeater').repeater('insert');
    });

    // Add experience button functionality
    $(document).on('click', '.addExperienceButton', function() {
        const experienceList = $(this).siblings('.experience-list');
        experienceList.append('<input type="text" name="experiences[][experience]" placeholder="Enter experience" required />');
    });

    // Remove button functionality
    $(document).on('click', '.remove', function() {
        $(this).closest('.repeater-section').remove();
    });
});

$(document).ready(function(){
    $(document).on('click', '.addskillButton', function() {
        const skillsList = $(this).siblings('.skills-list');
        skillsList.append('<input type="text" name="skill[][skill]" placeholder="Enter skill" />');
    });
});
