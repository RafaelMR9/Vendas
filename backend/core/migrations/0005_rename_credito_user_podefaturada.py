# Generated by Django 4.2 on 2023-04-29 13:08

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0004_alter_user_credito'),
    ]

    operations = [
        migrations.RenameField(
            model_name='user',
            old_name='credito',
            new_name='podeFaturada',
        ),
    ]
