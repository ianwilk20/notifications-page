document.addEventListener('DOMContentLoaded', (event) => {
    localStorage.setItem('notificationCount', '3')
})

const notificationLiveCount = document.getElementById(
    'notification-live-count'
)

const notificationList =
    document.getElementById('notification-list')

notificationList.addEventListener('click', function (e) {
    let targetElem = event.target
    while (targetElem && targetElem.tagName !== 'LI') {
        targetElem = targetElem.parentElement
    }
    if (targetElem) {
        toggleNotification(targetElem)
    }
})

function toggleNotification(element) {
    let notifText = element.querySelector(
        "[id^='notification-text-']"
    )
    if (
        element.classList &&
        element.classList.contains('bg-slate-100')
    ) {
        toggleOffNotification(element, notifText)
        decrementNotificationCount()
    } else {
        toggleOnNotification(element, notifText)
        incrementNotificationCount()
    }
}

function decrementNotificationCount() {
    currentCount = localStorage.getItem('notificationCount')
    if (
        currentCount !== undefined &&
        Number.isInteger(parseInt(currentCount, 10))
    ) {
        let newCount = parseInt(currentCount, 10) - 1
        notificationLiveCount.innerText = newCount
        localStorage.setItem('notificationCount', newCount)
    }
}

function incrementNotificationCount() {
    currentCount = localStorage.getItem('notificationCount')
    if (
        currentCount !== undefined &&
        Number.isInteger(parseInt(currentCount, 10))
    ) {
        let newCount = parseInt(currentCount, 10) + 1
        notificationLiveCount.innerText = newCount
        localStorage.setItem('notificationCount', newCount)
    }
}

function readAllNotifications() {
    notificationList
        .querySelectorAll('li')
        .forEach(function (item) {
            let notifText = item.querySelector(
                "[id^='notification-text-']"
            )
            toggleOffNotification(item, notifText)
        })
    localStorage.setItem('notificationCount', 0)
    notificationLiveCount.innerText = 0
}

function toggleOnNotification(element, notifText) {
    element.classList.add('bg-slate-100')
    notifText.classList.remove('after:content-[none]')
    notifText.classList.add('after:content-[""]')
}

function toggleOffNotification(element, notifText) {
    element.classList.remove('bg-slate-100')
    notifText.classList.remove('after:content-[""]')
    notifText.classList.add('after:content-[none]')
}