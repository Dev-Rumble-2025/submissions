from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from rest_framework import status
from .models import Notice
from .serializers import NoticeSerializer

# Create notice (Admin only)
class CreateNoticeAPIView(APIView):
    permission_classes = [IsAdminUser]

    def post(self, request):
        serializer = NoticeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(created_by=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# View notices (Any authenticated user)
class NoticeListAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        notices = Notice.objects.all().order_by('-created_at')
        serializer = NoticeSerializer(notices, many=True)
        return Response(serializer.data)
