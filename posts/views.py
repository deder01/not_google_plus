from rest_framework import permissions, viewsets, status, views
from rest_framework.response import Response

from authentication.models import Account
from authentication.permissions import IsAccountOwner
from authentication.serializers import AccountSerializer

import json

from django.contrib.auth import authenticate, login, logout


class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.order_by('-created_at')
    serializer_class = PostSerializer 

    def get_permissions(self):
        if self.request.method in permissions.SAFE_METHODS:
            return (permissions.AllowAny(),)

        return (permissions.IsAuthenticated(), IsAccountOwner(),)

def perform_create(self, serializer):
    instance = serializer.save(author=self.request.user)

    return super(PostViewSet, self).perform_create(serlializer)

class AccountPostsViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all.select_related('author').all()
    serializer_class = PostSerializer 

    def list(self, request, account_username=None):
        queryset = self.queryset.filter(author__username=account_username)
        serlializer = self.serializer_class(queryset, many=True)

        return Response(serializer.data)
