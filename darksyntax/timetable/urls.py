# timetable/urls.py
from django.urls import path
from .views import CreateTimetableAPIView, TimetableListAPIView

urlpatterns = [
    path('create', CreateTimetableAPIView.as_view(), name='create-timetable'),
    path('list', TimetableListAPIView.as_view(), name='list-timetable'),
]
