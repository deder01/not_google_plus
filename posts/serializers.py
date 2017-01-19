# Methods to serialize data from django to front end
from rest_framework import serializers

from authentication.serializers import AccountSerializer
from posts.models import Post


class PostSerializer(serializers.ModelSerializer):
    # do not put in fields so required can be set to false
    author = AccountSerializer(read_only=True, required=False)

    class Meta:
        model = Post
        fields = ('id', 'author', 'content', 'created_at', 'updated_at')
        read_only_fields = ('id', 'created_at', 'updated_at')

        def get_validation_exclusions(self, *args, **kwargs):
            exclusions = super(PostSerializer, self).get_validation_exclusions()

            return exclusions + ['author']
