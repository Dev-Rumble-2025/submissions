from rest_framework import serializers
from .models import Notice

class NoticeSerializer(serializers.ModelSerializer):
    created_by = serializers.StringRelatedField(read_only=True)

    class Meta:
        model = Notice
        fields = ['id', 'title', 'description', 'created_at', 'created_by']  

