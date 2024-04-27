from django.contrib.auth import get_user_model
from rest_framework import serializers
from allauth.account.adapter import get_adapter

class RegisterSerializer(serializers.Serializer):
    email = serializers.EmailField(required=allauth_settings.EMAIL_REQUIRED)
    username = serializers.CharField(required=True)
    password1 = serializers.CharField(write_only=True)
    password2 = serializers.CharField(write_only=True)

    def validate_username(self, username):
        user = get_user_model()
        if user.objects.filter(username=username).exists():
            raise serializers.ValidationError("A user with that username already exists.")
        return username

    def validate_email(self, email):
        user = get_user_model()
        if user.objects.filter(email=email).exists():
            raise serializers.ValidationError("Email is already in use")
        return email

    def validate_password1(self, password):
        return get_adapter().clean_password(password)

    def validate(self, data):
        if data['password1'] != data['password2']:
            raise serializers.ValidationError("Password fields didn't match.")
        return data

    def save(self, request):
        user = get_user_model().objects.create(
            username=self.validated_data['username'],
            email=self.validated_data['email']
        )
        user.set_password(self.validated_data['password1'])
        user.save()
        return user
