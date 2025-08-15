from django.urls import path
from .views import CreateNoticeAPIView, NoticeListAPIView

urlpatterns = [
    path('create', CreateNoticeAPIView.as_view(), name='create-notice'),
    path('list', NoticeListAPIView.as_view(), name='list-notice'),
]
