from django.urls import path
from .views import TaskListAPIView, SubmitTaskAPIView, AdminTaskCreateAPIView, AdminSubmissionsAPIView

urlpatterns = [
    path('', TaskListAPIView.as_view(), name='task-list'),            
    path('submit', SubmitTaskAPIView.as_view(), name='submit-task'),   
    path('tasks/create', AdminTaskCreateAPIView.as_view(), name='admin-create-task'),  
    path('submissions', AdminSubmissionsAPIView.as_view(), name='admin-submissions'), 
]
