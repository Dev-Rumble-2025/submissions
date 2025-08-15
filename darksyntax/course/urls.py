# course/urls.py
from django.urls import path
from .views import CourseListView, SubjectListView, PDFListView

urlpatterns = [
    path('', CourseListView.as_view(), name='course-list'),
    path('<int:course_id>/subjects/', SubjectListView.as_view(), name='subject-list'),
    path('subjects/<int:subject_id>/pdfs/', PDFListView.as_view(), name='pdf-list'),
]
